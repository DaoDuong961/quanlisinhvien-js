// có 2 cacsg để lấy thuhoocj tinh ở ngoài đối tượng
// console.log('ma sinh vien', sinhVien.masv)
// console.log('ma sinh vien', sinhVien['masv']);


// class là prototype trong javascript 
var sinhVien = new SinhVien()
var validation = new Validation()

var xuLyXacNhan = function () {

        sinhVien.maSV = document.querySelector("#maSinhVien").value;
        sinhVien.tenSV = document.querySelector("#tenSinhVien").value;
        sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
        sinhVien.diemToan = document.querySelector("#diemToan").value;
        sinhVien.diemLy = document.querySelector("#diemLy").value;
        sinhVien.diemHoa = document.querySelector("#diemHoa").value;
        sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

        // kiem tra du lieu rong 
        var valid = true;
        valid &= validation.ktraRong(sinhVien.maSV,'ma sinh vien','#error_maSinhVien_required') 
        & validation.ktraRong(sinhVien.tenSV,'ten sinh vien','#error_tenSinhVien_required') 
        & validation.ktraRong(sinhVien.diemToan, 'diem toan','#error_diemToan_required') 
        & validation.ktraRong(sinhVien.diemLy, 'diem ly','#error_diemLy_required') 
        & validation.ktraRong(sinhVien.diemHoa, 'diem ly','#error_diemHoa_required') 
        & validation.ktraRong(sinhVien.diemRenLuyen, 'diem hoa','#error_diemHoa_required')
        & validation.ktraRong(sinhVien.diemToan, 'diem ren luyen','#error_diemRenLuyen_required')

        // kiem tra tat ca laf so 
        valid &= validation.kiemTraTatCaLaSo(sinhVien.maSV, 'Ma sinh vien', '#error_maSinhVien_all_number')
        & validation.kiemTraTatCaLaSo(sinhVien.diemToan, 'Diem Toan', '#error_diemToan_all_number')
        & validation.kiemTraTatCaLaSo(sinhVien.diemLy, 'Diem Ly', '#error_diemLy_all_number')
        & validation.kiemTraTatCaLaSo(sinhVien.diemHoa, 'Diem Hoa', '#error_diemHoa_all_number')
        & validation.kiemTraTatCaLaSo(sinhVien.diemRenLuyen, 'Diem ren luyen', '#error_diemRenLuyen_all_number')

        // kiem tra chuoi 
        valid &= validation.kiemTraLaChuoi(sinhVien.maSV, 'Ma sinh vien', '#error_maSinhVien_min_max_length',4, 6)

        // kiem tra gia tri 
        valid &= validation.kiemTraGiaTri(sinhVien.diemToan, 'Diem Toan', '#error_diemToan_min_max_length',0, 10)
        & validation.kiemTraGiaTri(sinhVien.diemLy, 'Diem Ly', '#error_diemLy_min_max_length',0, 10)
        & validation.kiemTraGiaTri(sinhVien.diemHoa, 'Diem Hoa', '#error_diemHoa_min_max_length',0, 10)
        & validation.kiemTraGiaTri(sinhVien.diemRenLuyen, 'Diem ren luyen', '#error_diemRenLuyen_min_max_length',0, 10)
        
        // kiem tra tat ca la chu 
        valid &= validation.tatCaLaChu(sinhVien.tenSV, ' Ten sinh vien ', '#error_tenSinhVien_all_letter');

        if(!valid){
                alert('khong hop le')
                return;
        }
        // dua du lieu len giao dien 
        document.querySelector("#txttenSinhVien").innerHTML = sinhVien.tenSV;
        document.querySelector("#txtmaSinhVien").innerHTML = sinhVien.maSV;
        document.querySelector("#txtloaiSinhVien").innerHTML = sinhVien.loaiSinhVien;
        document.querySelector("#txtdiemTrungBinh").innerHTML = sinhVien['tinhdiemTrungBinh']().toFixed(2);
        document.querySelector("#txtxepLoai").innerHTML = sinhVien.xepLoai();
}

document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;
