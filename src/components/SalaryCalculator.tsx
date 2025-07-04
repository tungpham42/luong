import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faShieldAlt,
  faMoneyBillWave,
  faUserTie,
  faInfoCircle,
  faChartLine,
  faBuilding,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import regionData from "../data/regionData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend
);

const formatNumber = (value: number) => value.toLocaleString("vi-VN");
const parseNumber = (value: string) => Number(value.replace(/[^\d]/g, ""));

const SalaryCalculator: React.FC = () => {
  const [salary, setSalary] = useState<number>(0);
  const [result, setResult] = useState<{
    net: number;
    gross: number;
    insurance: number;
    tax: number;
    employerContributions: number;
    totalEmployerCost: number;
  } | null>(null);

  const [type, setType] = useState<"grossToNet" | "netToGross">("grossToNet");
  const [dependents, setDependents] = useState<number>(0);
  const [applyLaw, setApplyLaw] = useState<"2023_07" | "2024_07">("2024_07");
  const [region, setRegion] = useState<"I" | "II" | "III" | "IV">("I");
  const [showModal, setShowModal] = useState<boolean>(false);

  const baseSalary = applyLaw === "2024_07" ? 2340000 : 1800000;
  // Employee contribution rates
  const bhxh = 8;
  const bhyt = 1.5;
  const bhtn = 1;
  // Employer contribution rates
  const employerBhxh = 17.5;
  const employerBhyt = 3;
  const employerBhtn = 1;

  const regionalMinSalaryMap: Record<
    "2023_07" | "2024_07",
    Record<string, number>
  > = {
    "2023_07": {
      I: 4680000,
      II: 4160000,
      III: 3640000,
      IV: 3250000,
    },
    "2024_07": {
      I: 4960000,
      II: 4410000,
      III: 3860000,
      IV: 3450000,
    },
  };

  const regionalMinSalary = regionalMinSalaryMap[applyLaw][region];

  const personalDeduction = 11000000;
  const dependentDeduction = dependents * 4400000;

  const getTNCN = (taxableIncome: number): number => {
    const taxBrackets = [
      { limit: 5000000, rate: 0.05 },
      { limit: 10000000, rate: 0.1 },
      { limit: 18000000, rate: 0.15 },
      { limit: 32000000, rate: 0.2 },
      { limit: 52000000, rate: 0.25 },
      { limit: 80000000, rate: 0.3 },
      { limit: Infinity, rate: 0.35 },
    ];

    let tax = 0;
    let incomeLeft = taxableIncome;
    let previousLimit = 0;

    for (const bracket of taxBrackets) {
      const diff = bracket.limit - previousLimit;
      const taxable = Math.min(incomeLeft, diff);
      tax += taxable * bracket.rate;
      incomeLeft -= taxable;
      if (incomeLeft <= 0) break;
      previousLimit = bracket.limit;
    }

    return tax;
  };

  const getTNCNDetails = (
    taxableIncome: number
  ): {
    brackets: Array<{ range: string; rate: number; tax: number }>;
    total: number;
  } => {
    const taxBrackets = [
      { min: 0, max: 5000000, rate: 0.05 },
      { min: 5000000, max: 10000000, rate: 0.1 },
      { min: 10000000, max: 18000000, rate: 0.15 },
      { min: 18000000, max: 32000000, rate: 0.2 },
      { min: 32000000, max: 52000000, rate: 0.25 },
      { min: 52000000, max: 80000000, rate: 0.3 },
      { min: 80000000, max: Infinity, rate: 0.35 },
    ];

    let incomeLeft = taxableIncome;
    let totalTax = 0;
    const brackets = [];

    for (const bracket of taxBrackets) {
      if (incomeLeft <= 0) break;

      const bracketRange =
        bracket.max === Infinity
          ? `Trên ${formatNumber(bracket.min)} VND`
          : `${formatNumber(bracket.min)} - ${formatNumber(bracket.max)} VND`;

      const taxableAmount = Math.min(incomeLeft, bracket.max - bracket.min);
      const bracketTax = taxableAmount * bracket.rate;

      if (taxableAmount > 0) {
        brackets.push({
          range: bracketRange,
          rate: bracket.rate * 100,
          tax: bracketTax,
        });
        totalTax += bracketTax;
        incomeLeft -= taxableAmount;
      }
    }

    return { brackets, total: totalTax };
  };

  const handleCalculate = () => {
    const employeeInsuranceRate = (bhxh + bhyt + bhtn) / 100;
    const employerInsuranceRate =
      (employerBhxh + employerBhyt + employerBhtn) / 100;
    let gross = 0;
    let insurance = 0;
    let tax = 0;
    let net = 0;
    let employerContributions = 0;
    let totalEmployerCost = 0;

    if (type === "grossToNet") {
      gross = salary;
      insurance = gross * employeeInsuranceRate;
      employerContributions = gross * employerInsuranceRate;
      const taxableIncome = Math.max(
        gross - insurance - personalDeduction - dependentDeduction,
        0
      );
      tax = getTNCN(taxableIncome);
      net = gross - insurance - tax;
      totalEmployerCost = gross + employerContributions;
    } else {
      net = salary;
      let estimatedGross = net;
      for (let i = 0; i < 30; i++) {
        insurance = estimatedGross * employeeInsuranceRate;
        const taxableIncome = Math.max(
          estimatedGross - insurance - personalDeduction - dependentDeduction,
          0
        );
        tax = getTNCN(taxableIncome);
        const estimatedNet = estimatedGross - insurance - tax;
        if (Math.abs(estimatedNet - net) < 1000) break;
        estimatedGross += net - estimatedNet;
      }
      gross = estimatedGross;
      employerContributions = gross * employerInsuranceRate;
      totalEmployerCost = gross + employerContributions;
    }

    setResult({
      net: Math.round(net),
      gross: Math.round(gross),
      insurance: Math.round(insurance),
      tax: Math.round(tax),
      employerContributions: Math.round(employerContributions),
      totalEmployerCost: Math.round(totalEmployerCost),
    });
  };

  const chartData = result && {
    labels: [
      "Gross",
      "Bảo hiểm NLĐ",
      "Thuế TNCN",
      "Net",
      "Bảo hiểm DN",
      "Tổng chi DN",
    ],
    datasets: [
      {
        label: "VND",
        data: [
          result.gross,
          result.insurance,
          result.tax,
          result.net,
          result.employerContributions,
          result.totalEmployerCost,
        ],
        backgroundColor: [
          "#0d6efd",
          "#f0ad4e",
          "#dc3545",
          "#198754",
          "#6c757d",
          "#17a2b8",
        ],
      },
    ],
  };

  return (
    <Container className="my-5">
      <div className="calculator-card">
        <h2 className="text-center mb-4 fw-bold text-dark">
          <FontAwesomeIcon icon={faChartLine} className="me-2 text-primary" />
          Công cụ tính lương Gross & Net theo quy định hiện hành
        </h2>
        <p className="text-muted text-center mb-4">
          Tính lương Gross sang Net hoặc Net sang Gross chính xác theo quy định
          pháp luật Việt Nam. Công cụ giúp bạn hiểu rõ các khoản khấu trừ như
          bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp, thuế thu nhập cá
          nhân và các khoản doanh nghiệp phải đóng.
        </p>

        <Form>
          <Row className="mb-3">
            <Col md={12}>
              <h5 className="fw-semibold text-dark">
                Hiểu về lương Gross và Net
              </h5>
              <p className="text-muted small">
                <strong>Lương Gross</strong> là tổng thu nhập trước khi trừ các
                khoản bảo hiểm và thuế thu nhập cá nhân.{" "}
                <strong>Lương Net</strong> là số tiền thực nhận sau khi đã khấu
                trừ các khoản này. Chọn loại tính toán phù hợp với nhu cầu của
                bạn.
              </p>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label className="fw-semibold text-dark">
                Chọn thời điểm áp dụng quy định
              </Form.Label>
              <Form.Select
                value={applyLaw}
                onChange={(e) => setApplyLaw(e.target.value as any)}
              >
                <option value="2024_07">Từ 01/07/2024</option>
                <option value="2023_07">Từ 01/07/2023 - 30/06/2024</option>
              </Form.Select>
              <p className="text-muted small mt-1">
                Chọn thời điểm để áp dụng mức lương cơ sở và các quy định về bảo
                hiểm, thuế thu nhập cá nhân theo đúng luật hiện hành.
              </p>
            </Col>
            <Col md={6}>
              <Form.Label className="fw-semibold text-dark">
                Loại tính
              </Form.Label>
              <div className="mt-0">
                <ToggleButtonGroup
                  type="radio"
                  name="conversionType"
                  value={type}
                  onChange={(val: any) => setType(val)}
                >
                  <ToggleButton
                    value="grossToNet"
                    id="grossToNet"
                    variant="outline-primary"
                  >
                    Gross → Net
                  </ToggleButton>
                  <ToggleButton
                    value="netToGross"
                    id="netToGross"
                    variant="outline-primary"
                  >
                    Net → Gross
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label className="fw-semibold text-dark">
                Mức lương ({type === "grossToNet" ? "Gross" : "Net"})
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="salary-tooltip">
                      Nhập mức lương{" "}
                      {type === "grossToNet"
                        ? "Gross (tổng thu nhập trước khấu trừ)"
                        : "Net (thực nhận sau khấu trừ)"}
                    </Tooltip>
                  }
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="ms-2 text-secondary"
                  />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="text"
                inputMode="numeric"
                value={formatNumber(salary)}
                onChange={(e) => setSalary(parseNumber(e.target.value))}
              />
            </Col>
            <Col md={6}>
              <Form.Label className="fw-semibold text-dark">
                Số người phụ thuộc
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="dependents-tooltip">
                      Người phụ thuộc (con dưới 18 tuổi, cha mẹ già yếu...) được
                      giảm trừ 4.4 triệu VNĐ/người khi tính thuế thu nhập cá
                      nhân.
                    </Tooltip>
                  }
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="ms-2 text-secondary"
                  />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="number"
                value={dependents}
                onChange={(e) => setDependents(Number(e.target.value))}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label className="fw-semibold text-dark">
                Chọn vùng
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="region-tooltip">
                      Vùng áp dụng mức lương tối thiểu khác nhau tùy thuộc vào
                      khu vực địa lý (thành phố lớn, tỉnh thành, vùng nông
                      thôn...).
                    </Tooltip>
                  }
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="ms-2 text-secondary"
                  />
                </OverlayTrigger>
              </Form.Label>
              <Form.Select
                value={region}
                onChange={(e) => setRegion(e.target.value as any)}
              >
                <option value="I">Vùng I</option>
                <option value="II">Vùng II</option>
                <option value="III">Vùng III</option>
                <option value="IV">Vùng IV</option>
              </Form.Select>
              <Button
                variant="link"
                className="p-0 mt-2 text-primary"
                onClick={() => setShowModal(true)}
              >
                Xem chi tiết vùng
              </Button>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className="text-muted small">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="me-2 text-secondary"
                />
                Lương cơ sở:
                <strong className="ms-2">
                  {formatNumber(baseSalary)} VND
                </strong>{" "}
                – Lương tối thiểu vùng:
                <strong className="ms-2">
                  {formatNumber(regionalMinSalary)} VND
                </strong>
              </div>
            </Col>
          </Row>

          <Button
            variant="primary"
            size="lg"
            className="mt-3 w-100"
            onClick={handleCalculate}
          >
            Tính toán
          </Button>
        </Form>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Thông tin về vùng và mức lương tối thiểu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
              Mức lương tối thiểu vùng - Áp dụng từ{" "}
              {regionData[applyLaw].period}
            </h5>
            <ul>
              <li>
                <strong>Vùng I:</strong>{" "}
                {formatNumber(regionData[applyLaw].minSalaries.I)} VNĐ/tháng
              </li>
              <li>
                <strong>Vùng II:</strong>{" "}
                {formatNumber(regionData[applyLaw].minSalaries.II)} VNĐ/tháng
              </li>
              <li>
                <strong>Vùng III:</strong>{" "}
                {formatNumber(regionData[applyLaw].minSalaries.III)} VNĐ/tháng
              </li>
              <li>
                <strong>Vùng IV:</strong>{" "}
                {formatNumber(regionData[applyLaw].minSalaries.IV)} VNĐ/tháng
              </li>
            </ul>
            <h5>Chi tiết các vùng:</h5>
            <h6>Vùng I:</h6>
            <ul>
              {regionData[applyLaw].regions.I.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <h6>Vùng II:</h6>
            <ul>
              {regionData[applyLaw].regions.II.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <h6>Vùng III:</h6>
            <ul>
              {regionData[applyLaw].regions.III.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <h6>Vùng IV:</h6>
            <ul>
              {regionData[applyLaw].regions.IV.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>

        {result && (
          <div className="result-box mt-5">
            <h4>Kết quả tính lương</h4>
            <p className="text-muted small">
              Dưới đây là chi tiết các khoản thu nhập, khấu trừ và chi phí doanh
              nghiệp dựa trên thông tin bạn cung cấp. Biểu đồ minh họa giúp bạn
              hình dung rõ hơn về tỷ lệ các thành phần.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faBriefcase} className="text-primary" />
                <strong className="mx-2">Lương Gross:</strong>
                {formatNumber(result.gross)} VND
                <span className="text-muted small ms-2">
                  (Tổng thu nhập trước khi trừ các khoản)
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faShieldAlt} className="text-warning" />
                <strong className="mx-2">Bảo hiểm người lao động:</strong>
                {formatNumber(result.insurance)} VND
                <span className="text-muted small ms-2">
                  (BHXH {bhxh}%, BHYT {bhyt}%, BHTN {bhtn}%)
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  className="text-danger"
                />
                <strong className="mx-2">Thuế TNCN:</strong>
                {formatNumber(result.tax)} VND
                <span className="text-muted small ms-2">
                  (Thuế thu nhập cá nhân sau khi trừ giảm trừ gia cảnh)
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserTie} className="text-success" />
                <strong className="mx-2">Lương Net:</strong>
                {formatNumber(result.net)} VND
                <span className="text-muted small ms-2">
                  (Số tiền thực nhận)
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBuilding} className="text-secondary" />
                <strong className="mx-2">Bảo hiểm doanh nghiệp:</strong>
                {formatNumber(result.employerContributions)} VND
                <span className="text-muted small ms-2">
                  (BHXH {employerBhxh}%, BHYT {employerBhyt}%, BHTN{" "}
                  {employerBhtn}%)
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faWallet} className="text-info" />
                <strong className="mx-2">Người sử dụng lao động trả:</strong>
                {formatNumber(result.totalEmployerCost)} VND
                <span className="text-muted small ms-2">
                  (Tổng chi phí doanh nghiệp bao gồm lương Gross và bảo hiểm
                  doanh nghiệp)
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <h5>
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  className="text-danger me-2"
                />
                Chi tiết thuế thu nhập cá nhân
              </h5>
              <p className="text-muted small">
                Thuế TNCN được tính theo lũy tiến từng phần, dưới đây là cách
                phân bổ thuế theo các mức thu nhập chịu thuế.
              </p>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Bậc thuế</th>
                      <th>Thu nhập tính thuế</th>
                      <th>Thuế suất</th>
                      <th>Số thuế phải nộp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getTNCNDetails(
                      Math.max(
                        result.gross -
                          result.insurance -
                          personalDeduction -
                          dependentDeduction,
                        0
                      )
                    ).brackets.map((bracket, index) => (
                      <tr key={index}>
                        <td>Bậc {index + 1}</td>
                        <td>{bracket.range}</td>
                        <td>{bracket.rate}%</td>
                        <td>{formatNumber(Math.round(bracket.tax))} VND</td>
                      </tr>
                    ))}
                    <tr className="table-active">
                      <td colSpan={3} className="text-end fw-bold">
                        Tổng thuế TNCN phải nộp:
                      </td>
                      <td className="fw-bold">
                        {formatNumber(result.tax)} VND
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info mt-3">
                <strong>Giải thích:</strong> Thuế TNCN tính theo phương pháp lũy
                tiến từng phần. Thu nhập tính thuế = Lương Gross - Bảo hiểm -
                Giảm trừ (11 triệu cho bản thân + 4.4 triệu/người phụ thuộc).
                Thuế được tính theo từng bậc, mỗi bậc chỉ áp dụng thuế suất cho
                phần thu nhập vượt quá ngưỡng bậc đó.
              </div>
            </div>
            <Bar
              data={chartData!}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        )}

        <div className="mt-5">
          <h5 className="fw-semibold text-dark">
            Thông tin thêm về tính lương
          </h5>
          <p className="text-muted">
            <strong>Bảo hiểm xã hội (BHXH) - Người lao động:</strong> Đóng{" "}
            {bhxh}% lương Gross, giúp đảm bảo quyền lợi hưu trí, thai sản, ốm
            đau.
          </p>
          <p className="text-muted">
            <strong>Bảo hiểm xã hội (BHXH) - Doanh nghiệp:</strong> Đóng{" "}
            {employerBhxh}% lương Gross, đóng góp vào quỹ BHXH cho người lao
            động.
          </p>
          <p className="text-muted">
            <strong>Bảo hiểm y tế (BHYT) - Người lao động:</strong> Đóng {bhyt}%
            lương Gross, hỗ trợ chi phí khám chữa bệnh.
          </p>
          <p className="text-muted">
            <strong>Bảo hiểm y tế (BHYT) - Doanh nghiệp:</strong> Đóng{" "}
            {employerBhyt}% lương Gross, hỗ trợ quỹ BHYT cho người lao động.
          </p>
          <p className="text-muted">
            <strong>Bảo hiểm thất nghiệp (BHTN) - Người lao động:</strong> Đóng{" "}
            {bhtn}% lương Gross, hỗ trợ khi mất việc làm.
          </p>
          <p className="text-muted">
            <strong>Bảo hiểm thất nghiệp (BHTN) - Doanh nghiệp:</strong> Đóng{" "}
            {employerBhtn}% lương Gross, đóng góp vào quỹ BHTN.
          </p>
          <p className="text-muted">
            <strong>Người sử dụng lao động trả:</strong> Là tổng chi phí mà
            doanh nghiệp phải chi trả, bao gồm lương Gross và các khoản bảo hiểm
            doanh nghiệp (BHXH {employerBhxh}%, BHYT {employerBhyt}%, BHTN{" "}
            {employerBhtn}%).
          </p>
          <p className="text-muted">
            <strong>Thuế thu nhập cá nhân (TNCN):</strong> Tính dựa trên thu
            nhập chịu thuế (lương Gross trừ bảo hiểm và giảm trừ gia cảnh). Mức
            giảm trừ hiện tại là 11 triệu VNĐ cho bản thân và 4.4 triệu VNĐ cho
            mỗi người phụ thuộc.
          </p>
          <p className="text-muted">
            <strong>Lương tối thiểu vùng:</strong> Là mức lương tối thiểu mà
            doanh nghiệp phải trả cho người lao động, khác nhau tùy theo vùng
            địa lý (Vùng I: đô thị lớn như Hà Nội, TP.HCM; Vùng IV: khu vực nông
            thôn).
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SalaryCalculator;
