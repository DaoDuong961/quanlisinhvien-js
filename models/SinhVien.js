// prototype là lớp đối tượng trong js 
var SinhVien = function(){
	this.maSV = "";
	this.tenSV = "";
	this.loaiSinhVien = "";
	this.diemToan = "";
	this.diemLy = "";
	this.diemHoa = "";
	this.diemRenLuyen = "";
	this.tinhdiemTrungBinh = function () {
		var dtb = (Number(sinhVien.diemHoa) + Number(sinhVien.diemToan) + Number(sinhVien.diemLy)) / 3;
		return dtb;
	}
	this.xepLoai = function(){
		var diemTrungBinh = this.tinhdiemTrungBinh();
		if (this.diemRenLuyen < 5) {
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
}
	
