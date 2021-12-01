var xuLiXacNhan = function () {
  var maSinhVien = document.querySelector("#maSinhVien").value;
  var tenSinhVien = document.querySelector("#tenSinhVien").value;
  var loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  var diemToan = document.querySelector("#diemToan").value;
  var diemLy = document.querySelector("#diemLy").value;
  var diemHoa = document.querySelector("#diemHoa").value;
  var diemRenLuyen = document.querySelector("#diemRenLuyen").value;
// tinh diem trung binh 
  var diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
  var xepLoaiSinhVien = xepLoai(diemTrungBinh, diemRenLuyen);

  
// xu li in ket qua ra giao dien 
  document.querySelector("#txttenSinhVien").innerHTML = tenSinhVien;
  document.querySelector("#txtmaSinhVien").innerHTML = maSinhVien;
  document.querySelector("#txtloaiSinhVien").innerHTML = loaiSinhVien;
  document.querySelector("#txtdiemTrungBinh").innerHTML = diemTrungBinh.toFixed();
  document.querySelector("#txtxepLoai").innerHTML = xepLoaiSinhVien;
}

//tinh diem trung binh
var tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
  // nếu ko có ép kiểu Nunber thì js sẽ hiếu đo là cộng chuỗi  
  var dtb = (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
  return dtb;
}
// xep loai hoc vien 
var xepLoai = function (diemTrungBinh, diemRenLuyen) {
  if (diemRenLuyen < 5) {
    return "Yeu";
  } else {
    if (diemTrungBinh < 5) {
      return "Yeu";
    } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
      return "Trung binh";
    } else if (diemTrungBinh > 6.5 && diemTrungBinh < 8) {
      return "Kha";
    } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
      return "Gioi";
    } else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
      return "Xuat sac";
    } else {
      return "Khong hop le";
    }

  }
}
document.querySelector("#btnXacNhan").onclick = xuLiXacNhan;
//var a = tinhDiemTrungBinh(diemToan, diemLy, diemHoa)