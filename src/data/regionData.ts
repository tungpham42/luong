const regionData = {
  "2024_07": {
    period: "01/07/2024 - 30/06/2025",
    minSalaries: {
      I: 4960000,
      II: 4410000,
      III: 3860000,
      IV: 3450000,
    },
    regions: {
      I: [
        "Các quận và các huyện Gia Lâm, Đông Anh, Sóc Sơn, Thanh Trì, Thường Tín, Hoài Đức, Thạch Thất, Quốc Oai, Thanh Oai, Mê Linh, Chương Mỹ và thị xã Sơn Tây thuộc thành phố Hà Nội",
        "Các thành phố Hạ Long, Uông Bí, Móng Cái và các thị xã Quảng Yên, Đông Triều thuộc tỉnh Quảng Ninh",
        "Các quận và các huyện Thủy Nguyên, An Dương, An Lão, Vĩnh Bảo, Tiên Lãng, Cát Hải, Kiến Thụy thuộc thành phố Hải Phòng",
        "Thành phố Hải Dương thuộc tỉnh Hải Dương",
        "Các quận, thành phố Thủ Đức và các huyện Củ Chi, Hóc Môn, Bình Chánh, Nhà Bè thuộc Thành phố Hồ Chí Minh",
        "Các thành phố Biên Hòa, Long Khánh và các huyện Nhơn Trạch, Long Thành, Vĩnh Cửu, Trảng Bom, Xuân Lộc, Thống Nhất thuộc tỉnh Đồng Nai",
        "Các thành phố Thủ Dầu Một, Thuận An, Dĩ An, Tân Uyên, Bến Cát và các huyện Bàu Bàng, Bắc Tân Uyên, Dầu Tiếng, Phú Giáo thuộc tỉnh Bình Dương",
        "Thành phố Vũng Tàu, thị xã Phú Mỹ thuộc tỉnh Bà Rịa - Vũng Tàu",
        "Thành phố Tân An và các huyện Đức Hòa, Bến Lức, Cần Giuộc thuộc tỉnh Long An",
      ],
      II: [
        "Các huyện còn lại thuộc thành phố Hà Nội",
        "Thành phố Lào Cai thuộc tỉnh Lào Cai",
        "Các thành phố Thái Nguyên, Sông Công và Phổ Yên thuộc tỉnh Thái Nguyên",
        "Thành phố Hoà Bình và huyện Lương Sơn thuộc tỉnh Hòa Bình",
        "Thành phố Việt Trì thuộc tỉnh Phú Thọ",
        "Thành phố Bắc Giang, thị xã Việt Yên và huyện Yên Dũng thuộc tỉnh Bắc Giang",
        "Các thành phố Vĩnh Yên, Phúc Yên và các huyện Bình Xuyên, Yên Lạc thuộc tỉnh Vĩnh Phúc",
        "Các thành phố Bắc Ninh, Từ Sơn; các thị xã Thuận Thành, Quế Võ và các huyện Tiên Du, Yên Phong, Gia Bình, Lương Tài thuộc tỉnh Bắc Ninh",
        "Thành phố Hưng Yên, thị xã Mỹ Hào và các huyện Văn Lâm, Văn Giang, Yên Mỹ thuộc tỉnh Hưng Yên",
        "Thành phố Chí Linh, thị xã Kinh Môn và các huyện Cẩm Giàng, Bình Giang, Tứ Kỳ, Gia Lộc, Nam Sách, Kim Thành thuộc tỉnh Hải Dương",
        "Thành phố Cẩm Phả thuộc tỉnh Quảng Ninh",
        "Các huyện còn lại thuộc thành phố Hải Phòng",
        "Thành phố Thái Bình thuộc tỉnh Thái Bình",
        "Thành phố Nam Định và huyện Mỹ Lộc thuộc tỉnh Nam Định",
        "Thành phố Ninh Bình thuộc tỉnh Ninh Bình",
        "Các thành phố Thanh Hóa, Sầm Sơn và các thị xã Bỉm Sơn, Nghi Sơn thuộc tỉnh Thanh Hóa",
        "Thành phố Vinh, thị xã Cửa Lò và các huyện Nghi Lộc, Hưng Nguyên thuộc tỉnh Nghệ An",
        "Thành phố Đồng Hới thuộc tỉnh Quảng Bình",
        "Thành phố Huế thuộc tỉnh Thừa Thiên Huế",
        "Các thành phố Hội An, Tam Kỳ thuộc tỉnh Quảng Nam",
        "Các quận, huyện thuộc thành phố Đà Nẵng",
        "Các thành phố Nha Trang, Cam Ranh và thị xã Ninh Hòa thuộc tỉnh Khánh Hòa",
        "Các thành phố Đà Lạt, Bảo Lộc thuộc tỉnh Lâm Đồng",
        "Thành phố Phan Thiết thuộc tỉnh Bình Thuận",
        "Huyện Cần Giờ thuộc thành phố Hồ Chí Minh",
        "Thành phố Tây Ninh, các thị xã Trảng Bàng, Hòa Thành và huyện Gò Dầu thuộc tỉnh Tây Ninh",
        "Các huyện Định Quán, Tân Phú, Cẩm Mỹ thuộc tỉnh Đồng Nai",
        "Thành phố Đồng Xoài, thị xã Chơn Thành và huyện Đồng Phú thuộc tỉnh Bình Phước",
        "Thành phố Bà Rịa thuộc tỉnh Bà Rịa - Vũng Tàu",
        "Các huyện Thủ Thừa, Cần Đước và thị xã Kiến Tường thuộc tỉnh Long An",
        "Thành phố Mỹ Tho và huyện Châu Thành thuộc tỉnh Tiền Giang",
        "Thành phố Bến Tre và huyện Châu Thành thuộc tỉnh Bến Tre",
        "Thành phố Vĩnh Long và thị xã Bình Minh thuộc tỉnh Vĩnh Long",
        "Các quận thuộc thành phố Cần Thơ",
        "Các thành phố Rạch Giá, Hà Tiên, Phú Quốc thuộc tỉnh Kiên Giang",
        "Các thành phố Long Xuyên, Châu Đốc thuộc tỉnh An Giang",
        "Thành phố Trà Vinh thuộc tỉnh Trà Vinh",
        "Thành phố Sóc Trăng thuộc tỉnh Sóc Trăng",
        "Thành phố Bạc Liêu thuộc tỉnh Bạc Liêu",
        "Thành phố Cà Mau thuộc tỉnh Cà Mau",
      ],
      III: [
        "Các thành phố trực thuộc tỉnh còn lại (trừ các thành phố trực thuộc tỉnh nêu tại vùng I, vùng II)",
        "Thị xã Sa Pa, huyện Bảo Thắng thuộc tỉnh Lào Cai",
        "Các huyện Phú Bình, Phú Lương, Đồng Hỷ, Đại Từ thuộc tỉnh Thái Nguyên",
        "Các huyện Hiệp Hòa, Tân Yên, Lạng thuộc tỉnh Bắc Giang",
        "Các huyện Ninh Giang, Thanh Miện, Thanh Hà thuộc tỉnh Hải Dương",
        "Thị xã Phú Thọ và các huyện Phù Ninh, Lâm Thao, Thanh Ba, Tam Nông thuộc tỉnh Phú Thọ",
        "Các huyện Vĩnh Tường, Tam Đảo, Tam Dương, Lập Thạch, Sông Lô thuộc tỉnh Vĩnh Phúc",
        "Các huyện Vân Đồn, Hải Hà, Đầm Hà, Tiên Yên thuộc tỉnh Quảng Ninh",
        "Các huyện còn lại thuộc tỉnh Hưng Yên",
        "Các huyện Thái Thụy, Tiền Hải thuộc tỉnh Thái Bình",
        "Các huyện còn lại thuộc tỉnh Nam Định",
        "Thị xã Duy Tiên và huyện Kim Bảng thuộc tỉnh Hà Nam",
        "Các huyện Gia Viễn, Yên Khánh, Hoa Lư thuộc tỉnh Ninh Bình",
        "Các huyện Đông Sơn, Quảng Xương, Triệu Sơn, Thọ Xuân, Yên Định, Vĩnh Lộc, Thiệu Hóa, Hà Trung, Hậu Lộc, Nga Sơn, Hoằng Hóa, Nông Cống thuộc tỉnh Thanh Hóa",
        "Các huyện Quỳnh Lưu, Yên Thành, Diễn Châu, Đô Lương, Nam Đàn, Nghĩa Đàn và các thị xã Thái Hòa, Hoàng Mai thuộc tỉnh Nghệ An",
        "Thị xã Kỳ Anh thuộc tỉnh Hà Tĩnh",
        "Các thị xã Hương Thủy, Hương Trà và các huyện Phú Lộc, Phong Điền, Quảng Điền, Phú Vang thuộc tỉnh Thừa Thiên Huế",
        "Thị xã Điện Bàn và các huyện Đại Lộc, Duy Xuyên, Núi Thành, Quế Sơn, Thăng Bình, Phú Ninh thuộc tỉnh Quảng Nam",
        "Các huyện Bình Sơn, Sơn Tịnh thuộc tỉnh Quảng Ngãi",
        "Các thị xã Sông Cầu, Đông Hòa thuộc tỉnh Phú Yên",
        "Các huyện Ninh Hải, Thuận Bắc, Ninh Phước thuộc tỉnh Ninh Thuận",
        "Các huyện Cam Lâm, Diên Khánh, Vạn Ninh thuộc tỉnh Khánh Hòa",
        "Huyện Đăk Hà thuộc tỉnh Kon Tum",
        "Các huyện Đức Trọng, Di Linh thuộc tỉnh Lâm Đồng",
        "Thị xã La Gi và các huyện Hàm Thuận Bắc, Hàm Thuận Nam thuộc tỉnh Bình Thuận",
        "Các thị xã Phước Long, Bình Long và các huyện Hớn Quản, Lộc Ninh, Phú Riềng thuộc tỉnh Bình Phước",
        "Các huyện còn lại thuộc tỉnh Tây Ninh",
        "Các huyện Long Điền, Đất Đỏ, Xuyên Mộc, Châu Đức, Côn Đảo thuộc tỉnh Bà Rịa - Vũng Tàu",
        "Các huyện Đức Huệ, Châu Thành, Tân Trụ, Thạnh Hóa thuộc tỉnh Long An",
        "Các thị xã Cai Lậy và các huyện Chợ Gạo, Tân Phước thuộc tỉnh Tiền Giang",
        "Các huyện Ba Tri, Bình Đại, Mỏ Cày Nam thuộc tỉnh Bến Tre",
        "Các huyện Mang Thít, Long Hồ thuộc tỉnh Vĩnh Long",
        "Các huyện thuộc quận thuộc thành phố Cần Thơ",
        "Các huyện Kiên Lương, Kiên Hải, Châu Thành thuộc tỉnh Kiên Giang",
        "Thị xã Tân Châu và các huyện Châu Phú, Châu Thành, Thoại Sơn thuộc tỉnh An Giang",
        "Các huyện Châu Thành, Châu Thành A thuộc tỉnh Hậu Giang",
        "Thị xã Duyên Hải thuộc tỉnh Trà Vinh",
        "Thị xã Giá Rai và huyện Hòa Bình thuộc tỉnh Bạc Liêu",
        "Các thị xã Vĩnh Châu, Ngã Năm thuộc tỉnh Sóc Trăng",
        "Các huyện Năm Căn, Cái Nước, U Minh, Trần Văn Thời thuộc tỉnh Cà Mau",
        "Các huyện Lệ Thủy, Quảng Ninh, Bố Trạch, Quảng Trạch và thị xã Ba Đòn thuộc tỉnh Quảng Bình",
      ],
      IV: ["Các địa bàn còn lại"],
    },
  },
  "2025_07": {
    period: "Từ 01/07/2025",
    minSalaries: {
      I: 4960000,
      II: 4410000,
      III: 3860000,
      IV: 3450000,
    },
    regions: {
      I: [
        "Các phường Biên Hòa, Trấn Biên, Tam Hiệp, Long Bình, Trảng Dài, Hố Nai, Long Hưng, Bình Lộc, Bảo Vinh, Xuân Lập, Long Khánh, Hàng Gòn, Tân Triều, Phước Tân, Tam Phước, Phú Lý và các xã Đại Phước, Nhơn Trạch, Phước An, Phước Thái, Long Phước, Bình An, Long Thành, An Phước, An Viễn, Bình Minh, Trảng Bom, Bàu Hàm, Hưng Thịnh, Dầu Giây, Gia Kiệm, Thống Nhất, Xuân Đường, Xuân Đông, Xuân Định, Xuân Phú, Xuân Lộc, Xuân Hòa, Xuân Thành, Xuân Bắc, Trị An, Tân An thuộc tỉnh Đồng Nai",
        "Các phường Long An, Tân An, Khánh Hậu và các xã An Ninh, Hiệp Hòa, Hậu Nghĩa, Hòa Khánh, Đức Lập, Mỹ Hạnh, Đức Hòa, Thạnh Lợi, Bình Đức, Lương Hòa, Bến Lức, Mỹ Yên, Phước Lý, Mỹ Lộc, Cần Giuộc, Phước Vĩnh Tây, Tân Tập thuộc tỉnh Tây Ninh",
        "Các xã, phường còn lại thuộc tỉnh Quảng Ninh, thành phố Hải Phòng, thành phố Hà Nội, thành phố Hồ Chí Minh",
      ],
      II: [
        "Các phường Cam Đường, Lào Cai và các xã Cốc San, Hợp Thành, Gia Phú thuộc tỉnh Lào Cai",
        "Các phường Việt Trì, Nông Trang, Thanh Miếu, Vân Phú, Vĩnh Phúc, Vĩnh Yên, Phúc Yên, Xuân Hòa, Hòa Bình, Kỳ Sơn, Tân Hòa, Thống Nhất và các xã Hy Cương, Yên Lạc, Tề Lỗ, Liên Châu, Tam Hông, Nguyệt Đức, Bình Nguyên, Xuân Lãng, Bình Xuyên, Bình Tuyền, Lương Sơn, Cao Dương, Liên Sơn, Thịnh Minh thuộc tỉnh Phú Thọ",
        "Các phường Mông Dương, Quang Hanh, Cẩm Phả, Cửa Ông và xã Hải Hòa thuộc tỉnh Quảng Ninh",
        "Các phường Chu Văn An, Chí Linh, Trần Hưng Đạo, Nguyễn Trãi, Trần Nhân Tông, Lê Đại Hành, Kinh Môn, Nguyễn Đại Năng, Trần Liễu, Bắc An Phụ, Phạm Sư Mạnh, Nhị Chiểu và các xã Nam An Phụ, Nam Sách, Thái Tân, Hợp Tiến, Trần Phú, An Phú, Cẩm Giang, Cẩm Giàng, Tuệ Tĩnh, Mao Điền, Kẻ Sặt, Bình Giang, Đường An, Thượng Hồng, Gia Lộc, Yết Kiêu, Gia Phúc, Trường Tân, Tứ Kỳ, Tân Kỳ, Đại Sơn, Chí Minh, Lạc Phượng, Nguyên Giáp, Nguyễn Lương Bằng, Phú Thái, Lai Khê, An Thành, Kim Thành và đặc khu Bạch Long Vĩ thuộc thành phố Hải Phòng",
        "Các phường Phố Hiến, Sơn Nam, Hồng Châu, Mỹ Hào, Đường Hào, Thượng Hồng, Thái Bình, Trần Lãm, Trần Hưng Đạo, Trà Lý, Vũ Phúc và các xã Tân Hưng, Yên Mỹ, Việt Yên, Hoàn Long, Nguyễn Văn Linh, Như Quỳnh, Lạc Đạo, Đại Đồng, Nghĩa Trụ, Phụng Công, Văn Giang, Mễ Sở thuộc tỉnh Hưng Yên",
        "Các phường Phan Đình Phùng, Linh Sơn, Tích Lương, Gia Sàng, Quyết Thắng, Quan Triều, Phổ Yên, Vạn Xuân, Trung Thành, Phúc Thuận, Sông Công, Bá Xuyên, Bách Quang và các xã Tân Cương, Đại Phúc, Thành Công thuộc tỉnh Thái Nguyên",
        "Các xã, phường còn lại thuộc tỉnh Bắc Ninh",
        "Các xã Phượng Dực, Chuyên Mỹ, Đại Xuyên, Vân Đình, Ứng Thiên, Hòa Xá, Ứng Hòa, Mỹ Đức, Hồng Sơn, Phúc Sơn, Hương Sơn, Minh Châu, Quảng Oai, Vật Lại, Cổ Đô, Bất Bạt, Suối Hai, Ba Vì, Phúc Thọ, Phúc Lộc, Hát Môn, Đan Phượng thuộc thành phố Hà Nội",
        "Các phường Tây Hoa Lư, Hoa Lư, Nam Hoa Lư, Đông Hoa Lư, Nam Định, Thiên Trường, Đông A, Vị Khê, Thành Nam, Trường Thi, Hồng Quang, Mỹ Lộc thuộc tỉnh Ninh Bình",
        "Các phường Hạc Thành, Quảng Phú, Đông Quang, Đông Sơn, Đông Tiến, Hàm Rồng, Nguyệt Viên, Sầm Sơn, Nam Sầm Sơn, Bỉm Sơn, Quang Trung, Ngọc Sơn, Tân Dân, Hải Lĩnh, Tĩnh Gia, Đào Duy Từ, Hải Bình, Trúc Lâm, Nghi Sơn và các xã Trường Lâm, Các Sơn thuộc tỉnh Thanh Hóa",
        "Các phường Trường Vinh, Thành Vinh, Vinh Hưng, Vinh Phú, Vinh Lộc, Cửa Lò và các xã Hưng Nguyên, Yên Trung, Hưng Nguyên Nam, Lam Thành, Nghi Lộc, Phúc Lộc, Đông Lộc, Trung Lộc, Thần Lĩnh, Hải Lộc, Văn Kiều thuộc tỉnh Nghệ An",
        "Các phường Đồng Hới, Đồng Thuận, Đông Sơn thuộc tỉnh Quảng Trị",
        "Các phường Thuận An, Hóa Châu, Mỹ Thượng, Vỹ Dạ, Thuận Hóa, An Cựu, Thủy Xuân, Kim Long, Hương An, Phú Xuân, Dương Nỗ thuộc thành phố Huế",
        "Các phường Hải Châu, Hòa Cường, Thanh Khê, An Khê, An Hải, Sơn Trà, Ngũ Hành Sơn, Hòa Khánh, Hải Vân, Liên Chiểu, Cẩm Lệ, Hòa Xuân, Tam Kỳ, Quảng Phú, Hương Trà, Bàn Thạch, Hội An, Hội An Đông, Hội An Tây và các xã Hòa Vang, Hòa Tiến, Bà Nà, Tân Hiệp và đặc khu Hoàng Sa thuộc thành phố Đà Nẵng",
        "Các phường Nha Trang, Bắc Nha Trang, Tây Nha Trang, Nam Nha Trang, Bắc Cam Ranh, Cam Ranh, Cam Linh, Ba Ngòi, Ninh Hòa, Đông Ninh Hòa, Hòa Thắng và các xã Nam Cam Ranh, Bắc Ninh Hòa, Tân Định, Nam Ninh Hòa, Tây Ninh Hòa, Hòa Trí thuộc tỉnh Khánh Hòa",
        "Các phường Xuân Hương - Đà Lạt, Cam Ly - Đà Lạt, Lâm Viên - Đà Lạt, Xuân Trường - Đà Lạt, Lang Biang - Đà Lạt, 1 Bảo Lộc, 2 Bảo Lộc, 3 Bảo Lộc, B' Lao, Hàm Thắng, Bình Thuận, Mũi Né, Phú Thủy, Phan Thiết, Tiến Thành và xã Tuyên Quang thuộc tỉnh Lâm Đồng",
        "Các phường Bà Rịa, Long Hương, Tam Long và các xã Bình Khánh, An Thới Đông, Cần Giờ, Thạnh An thuộc thành phố Hồ Chí Minh",
        "Các phường Minh Hưng, Chơn Thành, Đồng Xoài, Bình Phước và các xã Xuân Quế, Cẩm Mỹ, Sông Ray, La Ngà, Định Quán, Phú Vinh, Phú Hòa, Tà Lài, Nam Cát Tiên, Tân Phú, Phú Lâm, Nha Bích, Tân Quan, Thuận Lợi, Đồng Tâm, Tân Lợi, Đồng Phú, Đak Lua, Thanh Sơn thuộc tỉnh Đồng Nai",
        "Các phường Kiến Tường, Tân Ninh, Bình Minh, Ninh Thạnh, Long Hoa, Hòa Thành, Thanh Điền, Trảng Bàng, An Tịnh, Gò Dầu, Gia Lộc và các xã Tuyên Thạnh, Bình Hiệp, Thủ Thừa, Mỹ An, Mỹ Thạnh, Tân Long, Long Cang, Rạch Kiến, Mỹ Lệ, Tân Lân, Cần Đước, Long Hựu, Hưng Thuận, Phước Chỉ, Thạnh Đức, Phước Thạnh, Truông Mít, Nhựt Tảo thuộc tỉnh Tây Ninh",
        "Các phường Long Xuyên, Bình Đức, Mỹ Thới, Châu Đốc, Vĩnh Tế, Vĩnh Thông, Rạch Giá, Hà Tiên, Tô Châu; các xã Mỹ Hòa Hưng, Tiên Hải và các đặc khu Phú Quốc, Thổ Châu thuộc tỉnh An Giang",
        "Các phường Mỹ Tho, Đạo Thạnh, Mỹ Phong, Thới Sơn, Trung An và các xã Tân Hương, Châu Thành, Long Hưng, Long Định, Vĩnh Kim, Kim Sơn, Bình Trưng thuộc tỉnh Đồng Tháp",
        "Các phường Thanh Đức, Long Châu, Phước Hậu, Tân Hạnh, Tân Ngãi, Bình Minh, Cái Vồn, Đông Thành, An Hội, Phú Khương, Bến Tre, Sơn Đông, Phú Tân, Long Đức, Trà Vinh, Nguyệt Hóa, Hòa Thuận và các xã Phú Túc, Giao Long, Tiên Thủy, Tân Phú thuộc tỉnh Vĩnh Long",
        "Các phường Phú Lợi, Mỹ Xuyên, Ninh Kiều, Cái Khế, Tân An, An Bình, Thới An Đông, Bình Thủy, Long Tuyền, Cái Răng, Hưng Phú, Ô Môn, Thới Long, Phước Thới, Trung Nhứt, Thốt Nốt, Thuận Hưng, Tân Lộc, Sóc Trăng thuộc thành phố Cần Thơ",
        "Các phường An Xuyên, Lý Văn Lâm, Tân Thành, Hòa Thành, Bạc Liêu, Vĩnh Trạch, Hiệp Thành thuộc tỉnh Cà Mau",
      ],
      III: [
        "Các phường Văn Phú, Yên Bái, Nam Cường, Âu Lâu, Sa Pa và các xã Phong Hải, Xuân Quang, Bảo Thắng, Tằng Loỏng, Mường Bo, Bản Hồ, Tả Phìn, Tả Van, Ngũ Chỉ Sơn thuộc tỉnh Lào Cai",
        "Các phường Thục Phán, Nùng Trí Cao, Tân Giang thuộc tỉnh Cao Bằng",
        "Các phường Điện Biên Phủ, Mường Thanh và xã Mường Phăng, Nà Tấu thuộc tỉnh Điện Biên",
        "Các phường Tân Phong, Đoàn Kết thuộc tỉnh Lai Châu",
        "Các phường Tô Hiệu, Chiềng An, Chiềng Cơi, Chiềng Sinh thuộc tỉnh Sơn La",
        "Các phường Mỹ Lâm, Minh Xuân, Nông Tiến, An Tường, Bình Thuận, Hà Giang 1, Hà Giang 2 và xã Ngọc Đường thuộc tỉnh Tuyên Quang",
        "Các phường Tam Thanh, Lương Văn Tri, Hoàng Văn Thụ, Đông Kinh thuộc tỉnh Lạng Sơn",
        "Các phường Phong Châu, Phú Thọ, Âu Cơ và các xã Lâm Thao, Xuân Lũng, Phùng Nguyên, Bản Nguyên, Phù Ninh, Dân Chủ, Phú Mỹ, Trạm Thản, Bình Phú, Thanh Ba, Quảng Yên, Hoàng Cương, Đông Thành, Chí Tiên, Liên Minh, Tam Nông, Thọ Văn, Vạn Xuân, Hiền Quan, Tam Sơn, Sông Lô, Hải Lựu, Yên Lãng, Lập Thạch, Tiên Lữ, Thái Hòa, Liên Hòa, Hợp Lý, Sơn Đông, Tam Đảo, Đại Đình, Đạo Trù, Tam Dương, Hội Thịnh, Hoàng An, Tam Dương Bắc, Vĩnh Tường, Thổ Tang, Vĩnh Hưng, Vĩnh An, Vĩnh Phú, Vĩnh Thành thuộc tỉnh Phú Thọ",
        "Các xã Tiên Yên, Điền Xá, Đông Ngũ, Hải Lạng, Quảng Tân, Đầm Hà, Quảng Hà, Đường Hoa, Quảng Đức, Cái Chiên và đặc khu Vân Đồn thuộc tỉnh Quảng Ninh",
        "Các xã Thanh Hà, Hà Tây, Hà Bắc, Hà Đông, Ninh Giang, Vĩnh Lại, Khúc Thừa Dụ, Tân An, Hồng Châu, Thanh Miện, Bắc Thanh Miện, Hải Hưng, Nam Thanh Miện, Hà Nam thuộc thành phố Hải Phòng",
        "Các xã Hoàng Hoa Thám, Tiên Lữ, Tiên Hoa, Quang Hưng, Đoàn Đào, Tiên Tiến, Tống Trân, Lương Bằng, Nghĩa Dân, Hiệp Cường, Đức Hợp, Ân Thi, Xuân Trúc, Phạm Ngũ Lão, Nguyễn Trãi, Hồng Quang, Khoái Châu, Triệu Việt Vương, Việt Tiến, Chí Minh, Châu Ninh, Thái Thụy, Đông Thụy Anh, Bắc Thụy Anh, Thụy Anh, Nam Thụy Anh, Bắc Thái Ninh, Thái Ninh, Đông Thái Ninh, Nam Thái Ninh, Tây Thái Ninh, Tây Thụy Anh, Tiền Hải, Tây Tiền Hải, Ái Quốc, Đồng Châu, Đông Tiền Hải, Nam Cường, Hưng Phú, Nam Tiền Hải thuộc tỉnh Hưng Yên",
        "Các phường Đức Xuân, Bắc Kạn và các xã Đại Từ, Đức Lương, Phú Thịnh, La Bằng, Phú Lạc, An Khánh, Quân Chu, Vạn Phú, Phú Xuyên, Phú Bình, Tân Thành, Điềm Thụy, Kha Sơn, Tân Khánh, Đồng Hỷ, Quang Sơn, Trại Cau, Nam Hòa, Văn Hán, Văn Lăng, Phú Lương, Vô Tranh, Yên Trạch, Hợp Thành, Phong Quang thuộc tỉnh Thái Nguyên",
        "Các xã Lạng Giang, Mỹ Thái, Kép, Tân Dĩnh, Tiên Lục, Tân Yên, Ngọc Thiện, Nhã Nam, Phúc Hòa, Quang Trung, Hợp Thịnh, Hiệp Hòa, Hoàng Vân, Xuân Cẩm thuộc tỉnh Bắc Ninh",
        "Các phường Tam Điệp, Yên Sơn, Trung Sơn, Yên Thắng, Hà Nam, Phủ Lý, Phù Vân, Châu Sơn, Liêm Tuyền, Duy Tiên, Duy Tân, Đồng Văn, Duy Hà, Tiên Sơn, Lê Hồ, Nguyễn Úy, Lý Thường Kiệt, Kim Thanh, Tam Chúc, Kim Bảng và các xã Gia Viễn, Đại Hoàng, Gia Hưng, Gia Phong, Gia Vân, Gia Trấn, Yên Khánh, Khánh Nhạc, Khánh Thiện, Khánh Hội, Khánh Trung, Nam Trực, Nam Minh, Nam Đồng, Nam Ninh, Nam Hồng, Minh Tân, Hiển Khánh, Vụ Bản, Liên Minh, Ý Yên, Yên Đồng, Yên Cường, Vạn Thắng, Vũ Dương, Tân Minh, Phong Doanh, Cổ Lễ, Ninh Giang, Cát Thành, Trực Ninh, Quang Hưng, Minh Thái, Ninh Cường, Xuân Trường, Xuân Hưng, Xuân Giang, Xuân Hồng, Hải Hậu, Hải Anh, Hải Tiến, Hải Hưng, Hải An, Hải Quang, Hải Xuân, Hải Thịnh, Giao Minh, Giao Hòa, Giao Thủy, Giao Phúc, Giao Hưng, Giao Bình, Giao Ninh, Đồng Thịnh, Nghĩa Hưng, Nghĩa Sơn, Hồng Phong, Quỹ Nhất, Nghĩa Lâm, Rạng Đông thuộc tỉnh Ninh Bình",
        "Các xã Hà Trung, Tống Sơn, Hà Long, Hoạt Giang, Lĩnh Toại, Triệu Lộc, Đông Thành, Hậu Lộc, Hoa Lộc, Vạn Lộc, Nga Sơn, Nga Thắng, Hồ Vương, Tân Tiến, Nga An, Ba Đình, Hoằng Hóa, Hoằng Tiến, Hoằng Thanh, Hoằng Lộc, Hoằng Châu, Hoằng Sơn, Hoằng Phú, Hoằng Giang, Lưu Vệ, Quảng Yên, Quảng Ngọc, Quảng Ninh, Quảng Bình, Tiên Trang, Quảng Chính, Nông Cống, Thắng Lợi, Trung Chính, Trường Văn, Thăng Bình, Tượng Lĩnh, Công Chính, Thiệu Hóa, Thiệu Quang, Thiệu Tiến, Thiệu Toán, Thiệu Trung, Yên Định, Yên Trường, Yên Phú, Quý Lộc, Yên Ninh, Định Tân, Định Hòa, Thọ Xuân, Thọ Long, Xuân Hòa, Sao Vàng, Lam Sơn, Thọ Lập, Xuân Tín, Xuân Lập, Vĩnh Lộc, Tây Đô, Biện Thượng, Triệu Sơn, Thọ Bình, Thọ Ngọc, Thọ Phú, Hợp Tiến, An Nông, Tân Ninh, Đồng Tiến thuộc tỉnh Thanh Hóa",
        "Các phường Hoàng Mai, Tân Mai, Quỳnh Mai, Thái Hòa, Tây Hiếu và các xã Diễn Châu, Đức Châu, Quảng Châu, Hải Châu, Tân Châu, An Châu, Minh Châu, Hùng Châu, Đô Lương, Bạch Ngọc, Văn Hiến, Bạch Hà, Thuần Trung, Lương Sơn, Vạn An, Nam Đàn, Đại Huệ, Thiên Nhẫn, Kim Liên, Nghĩa Đàn, Nghĩa Thọ, Nghĩa Lâm, Nghĩa Mai, Nghĩa Hưng, Nghĩa Khánh, Nghĩa Lộc, Quỳnh Lưu, Quỳnh Văn, Quỳnh Anh, Quỳnh Tam, Quỳnh Phú, Quỳnh Sơn, Quỳnh Thắng, Đông Hiếu, Yên Thành, Quan Thành, Hợp Minh, Vân Tụ, Vân Du, Quang Đồng, Giai Lạc, Bình Minh, Đông Thành thuộc tỉnh Nghệ An",
        "Các phường Sông Trí, Hải Ninh, Hoành Sơn, Vũng Áng, Thành Sen, Trần Phú, Hà Huy Tập và các xã Thạch Lạc, Đồng Tiến, Thạch Khê, Cẩm Bình, Kỳ Hoa thuộc tỉnh Hà Tĩnh",
        "Các phường Đông Hà, Nam Đông Hà, Ba Đồn, Bắc Gianh và các xã Nam Gianh, Nam Ba Đồn, Tân Gianh, Trung Thuần, Quảng Trạch, Hòa Trạch, Phú Trạch, Thượng Trạch, Phong Nha, Bắc Trạch, Đông Trạch, Hoàn Lão, Bố Trạch, Nam Trạch, Quảng Ninh, Ninh Châu, Trường Ninh, Trường Sơn, Lệ Thủy, Cam Hồng, Sen Ngư, Tân Mỹ, Trường Phú, Lệ Ninh, Kim Ngân thuộc tỉnh Quảng Trị",
        "Các phường Điện Bàn, Điện Bàn Đông, An Thắng, Điện Bàn Bắc và các xã Núi Thành, Tam Mỹ, Tam Anh, Đức Phú, Tam Xuân, Tam Hải, Tây Hồ, Chiên Đàn, Phú Ninh, Thăng Bình, Thăng An, Thăng Trường, Thăng Điền, Thăng Phú, Đồng Dương, Quế Sơn Trung, Quế Sơn, Xuân Phú, Nông Sơn, Quế Phước, Duy Nghĩa, Nam Phước, Duy Xuyên, Thu Bồn, Điện Bàn Tây, Gò Nổi, Đại Lộc, Hà Nha, Thượng Đức, Vu Gia, Phú Thuận thuộc thành phố Đà Nẵng",
        "Các phường Trương Quang Trọng, Cẩm Thành, Nghĩa Lộ, Kon Tum, Đăk Cấm, Đăk Bla và các xã Tịnh Khê, An Phú, Bình Minh, Bình Chương, Bình Sơn, Vạn Tường, Đông Sơn, Trường Giang, Ba Gia, Sơn Tịnh, Thọ Phong, Ngọk Bay, Ia Chim, Đăk Rơ Wa, Đăk Pxi, Đăk Mar, Đăk Ui, Đăk Hà, Ngọk Réo thuộc tỉnh Quảng Ngãi",
        "Các phường Buôn Ma Thuột, Tân An, Tân Lập, Xuân Đài, Sông Cầu, Thành Nhất, Ea Kao, Tuy Hòa, Phú Yên, Bình Kiến, Đông Hòa, Hòa Hiệp và các xã Hòa Phú, Xuân Thọ, Xuân Cảnh, Xuân Lộc, Hòa Xuân thuộc tỉnh Đắk Lắk",
        "Các phường Phan Rang, Đông Hải, Ninh Chử, Bảo An, Đô Vinh và các xã Đại Lãnh, Tu Bông, Vạn Thắng, Vạn Ninh, Vạn Hưng, Diên Khánh, Diên Lạc, Diên Điền, Suối Hiệp, Diên Thọ, Diên Lâm, Cam Lâm, Suối Dầu, Cam Hiệp, Cam An, Ninh Phước, Phước Hữu, Phước Hậu, Phước Dinh, Ninh Hải, Xuân Hải, Vĩnh Hải, Thuận Bắc, Công Hải thuộc tỉnh Khánh Hòa",
        "Các phường Quy Nhơn, Quy Nhơn Đông, Quy Nhơn Tây, Quy Nhơn Nam, Quy Nhơn Bắc, Pleiku, Hội Phú, Thống Nhất, Diên Hồng, An Phú và các xã Biển Hồ, Gào thuộc tỉnh Gia Lai",
        "Các phường La Gi, Phước Hội, Bắc Gia Nghĩa, Nam Gia Nghĩa, Đông Gia Nghĩa và các xã Hiệp Thạnh, Đức Trọng, Tân Hội, Tà Hine, Tà Năng, Đinh Văn Lâm Hà, Di Linh, Hòa Ninh, Hòa Bắc, Đinh Trang Thượng, Bảo Thuận, Sơn Điền, Gia Hiệp, Tân Hải, Đông Giang, La Dạ, Hàm Thuận Bắc, Hàm Thuận, Hồng Sơn, Hàm Liêm, Hàm Thạnh, Hàm Kiệm, Tân Thành, Hàm Thuận Nam, Tân Lập, Ninh Gia thuộc tỉnh Lâm Đồng",
        "Các xã Ngãi Giao, Bình Giã, Kim Long, Châu Đức, Xuân Sơn, Nghĩa Thành, Hòa Hiệp, Bình Châu, Hồ Tràm, Xuyên Mộc, Hòa Hội, Bàu Lâm, Phước Hải, Long Hải, Đất Đỏ, Long Điền và đặc khu Côn Đảo thuộc thành phố Hồ Chí Minh",
        "Các phường Tân Châu, Long Phú; các xã Tân An, Châu Phong, Vĩnh Xương, Châu Phú, Mỹ Đức, Vĩnh Thạnh Trung, Bình Mỹ, Thạnh Mỹ Tây, An Châu, Bình Hòa, Cần Đăng, Vĩnh Hanh, Vĩnh An, Thoại Sơn, Óc Eo, Định Mỹ, Phú Hòa, Vĩnh Trạch, Tây Phú, Thạnh Lộc, Châu Thành, Bình An, Hòa Điền, Kiên Lương, Sơn Hải, Hòn Nghệ và đặc khu Kiên Hải thuộc tỉnh An Giang",
        "Các phường Gò Công, Long Thuận, Sơn Qui, Bình Xuân, Mỹ Phước Tây, Thanh Hòa, Cai Lậy, Nhị Quý, An Bình, Hồng Ngự, Thường Lạc, Cao Lãnh, Mỹ Ngãi, Mỹ Trà, Sa Đéc và các xã Tân Phú, Tân Phước 1, Tân Phước 2, Tân Phước 3, Hưng Thạnh, Mỹ Tịnh An, Lương Hòa Lạc, Tân Thuận Bình, Chợ Gạo, An Thạnh Thủy, Bình Ninh, Tân Dương thuộc tỉnh Đồng Tháp",
        "Các phường Duyên Hải, Trường Long Hòa và các xã Cái Nhum, Tân Long Hội, Nhơn Phú, Bình Phước, An Bình, Long Hồ, Phú Quới, Đồng Khởi, Mỏ Cày, Thành Thới, An Định, Hương Mỹ, Tân Thủy, Bảo Thạnh, Ba Tri, Tân Xuân, Mỹ Chánh Hòa, An Ngãi Trung, An Hiệp, Thới Thuận, Thạnh Phước, Bình Đại, Thạnh Trị, Lộc Thuận, Châu Hưng, Phú Thuận, Long Hữu, Hưng Nhượng thuộc tỉnh Vĩnh Long",
        "Các phường Vị Thanh, Vị Tân, Đại Thành, Ngã Bảy, Vĩnh Phước, Vĩnh Châu, Khánh Hòa, Ngã Năm, Mỹ Quới và các xã Tân Long, Phong Điền, Nhơn Ái, Trường Long, Thới Lai, Đông Thuận, Trường Xuân, Trường Thành, Cờ Đỏ, Đông Hiệp, Thạnh Phú, Thới Hưng, Trung Hưng, Vĩnh Thạnh, Vĩnh Trinh, Thạnh An, Thạnh Quới, Hỏa Lựu, Thạnh Xuân, Tân Hòa, Trường Long Tây, Châu Thành, Đông Phước, Phú Hữu, Vĩnh Hải, Lai Hòa thuộc thành phố Cần Thơ",
        "Các phường Giá Rai, Láng Tròn và các xã U Minh, Nguyễn Phích, Khánh Lâm, Khánh An, Khánh Bình, Đá Bạc, Khánh Hưng, Sông Đốc, Trần Văn Thời, Đất Mới, Năm Căn, Tam Giang, Lương Thế Trân, Hưng Mỹ, Cái Nước, Tân Hưng, Phú Mỹ, Phong Thạnh, Hòa Bình, Vĩnh Mỹ, Vĩnh Hậu thuộc tỉnh Cà Mau",
        "Các xã, phường còn lại của thành phố Huế, tỉnh Đồng Nai, tỉnh Tây Ninh",
      ],
      IV: [
        "Các xã Ba Chẽ, Hoành Mô, Lục Hồn, Bình Liêu và đặc khu Cô Tô thuộc tỉnh Quảng Ninh",
        "Các phường Chũ, Phượng Sơn và các xã Đại Sơn, Sơn Động, Tây Yên Tử, Dương Hưu, Yên Định, An Lạc, Vân Sơn, Biển Động, Lục Ngạn, Đèo Gia, Sơn Hải, Tân Sơn, Biên Sơn, Sa Lý, Nam Dương, Kiên Lao, Lục Sơn, Trường Sơn, Cẩm Lý, Đông Phú, Nghĩa Phương, Lục Nam, Bắc Lũng, Bảo Đài, Yên Thế, Bố Hạ, Đồng Kỳ, Xuân Lương, Tam Tiến, Tuấn Đạo thuộc tỉnh Bắc Ninh",
        "Các xã A Lưới 1, A Lưới 2, A Lưới 3, A Lưới 4, A Lưới 5 thuộc thành phố Huế",
        "Các xã Thiện Hưng, Hưng Phước, Phú Nghĩa, Đa Kia, Phước Sơn, Nghĩa Trung, Bù Đăng, Thọ Sơn, Đak Nhau, Bom Bo, Bù Gia Mập, Đăk Ơ thuộc tỉnh Đồng Nai",
        "Các xã Hưng Điền, Vĩnh Thạnh, Tân Hưng, Vĩnh Châu, Tuyên Bình, Vĩnh Hưng, Khánh Hưng, Bình Hòa, Mộc Hóa, Hậu Thạnh, Nhơn Hòa Lập, Nhơn Ninh, Tân Thạnh thuộc tỉnh Tây Ninh",
        "Các xã, phường và đặc khu còn lại của tỉnh Lào Cai, tỉnh Cao Bằng, tỉnh Điện Biên, tỉnh Lai Châu, tỉnh Sơn La, tỉnh Tuyên Quang, tỉnh Lạng Sơn, tỉnh Phú Thọ, tỉnh Hưng Yên, tỉnh Thái Nguyên, tỉnh Ninh Bình, tỉnh Thanh Hóa, tỉnh Nghệ An, tỉnh Hà Tĩnh, tỉnh Quảng Trị, thành phố Đà Nẵng, tỉnh Quảng Ngãi, tỉnh Đắk Lắk, tỉnh Khánh Hòa, tỉnh Gia Lai, tỉnh Lâm Đồng, tỉnh An Giang, tỉnh Đồng Tháp, tỉnh Vĩnh Long, thành phố Cần Thơ, tỉnh Cà Mau",
      ],
    },
  },
};
export default regionData;
