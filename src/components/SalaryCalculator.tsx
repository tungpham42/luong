import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
} from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
  } | null>(null);

  const [type, setType] = useState<"grossToNet" | "netToGross">("grossToNet");
  const [dependents, setDependents] = useState<number>(0);
  const [applyLaw, setApplyLaw] = useState<"2023_07" | "2024_07">("2024_07");
  const [region, setRegion] = useState<"I" | "II" | "III" | "IV">("I");

  const baseSalary = applyLaw === "2024_07" ? 2340000 : 1800000;
  const bhxh = 8;
  const bhyt = 1.5;
  const bhtn = 1;

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
      I: 4680000,
      II: 4160000,
      III: 3640000,
      IV: 3250000,
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

  const handleCalculate = () => {
    const insuranceRate = (bhxh + bhyt + bhtn) / 100;
    let gross = 0;
    let insurance = 0;
    let tax = 0;
    let net = 0;

    if (type === "grossToNet") {
      gross = salary;
      insurance = gross * insuranceRate;
      const taxableIncome = Math.max(
        gross - insurance - personalDeduction - dependentDeduction,
        0
      );
      tax = getTNCN(taxableIncome);
      net = gross - insurance - tax;
    } else {
      net = salary;
      let estimatedGross = net;
      for (let i = 0; i < 30; i++) {
        insurance = estimatedGross * insuranceRate;
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
    }

    setResult({
      net: Math.round(net),
      gross: Math.round(gross),
      insurance: Math.round(insurance),
      tax: Math.round(tax),
    });
  };

  const chartData = result && {
    labels: ["Gross", "Bảo hiểm", "Thuế TNCN", "Net"],
    datasets: [
      {
        label: "VND",
        data: [result.gross, result.insurance, result.tax, result.net],
        backgroundColor: ["#0d6efd", "#f0ad4e", "#dc3545", "#198754"],
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

        <Form>
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
            </Col>
            <Col md={6} className="d-flex align-items-end">
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

        {result && (
          <div className="result-box">
            <h4>Kết quả:</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faBriefcase} className="text-primary" />
                <strong className="mx-2">Lương Gross:</strong>
                {formatNumber(result.gross)} VND
              </li>
              <li>
                <FontAwesomeIcon icon={faShieldAlt} className="text-warning" />
                <strong className="mx-2">Bảo hiểm:</strong>
                {formatNumber(result.insurance)} VND
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  className="text-danger"
                />
                <strong className="mx-2">Thuế TNCN:</strong>
                {formatNumber(result.tax)} VND
              </li>
              <li>
                <FontAwesomeIcon icon={faUserTie} className="text-success" />
                <strong className="mx-2">Lương Net:</strong>
                {formatNumber(result.net)} VND
              </li>
            </ul>
            <Bar
              data={chartData!}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default SalaryCalculator;
