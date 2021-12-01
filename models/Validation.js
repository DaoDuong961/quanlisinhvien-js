var Validation = function () {
  this.ktraRong = function (value, name, selectorError) {
    if (value.trim() === '') {
      document.querySelector(selectorError).innerHTML = name + 'khong duoc bo trong';
      document.querySelector(selectorError).style.display = 'block';
      return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    document.querySelector(selectorError).style.display = 'none';
    return true;
  }

  // kiem tra tat ca  ka so
  this.kiemTraTatCaLaSo = function (value, name, selectorError) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      document.querySelector(selectorError).innerHTML = '';
      document.querySelector(selectorError).style.display = 'none';
      return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tat ca phai la so';
    document.querySelector(selectorError).style.display = 'block';
    return false;
  }

  // kiem tra do dai chuoi 
  this.kiemTraLaChuoi = function (value, name, selectorError, minLength, maxLength) {
    if (value.trim().length < minLength || value.trim().length > maxLength) {
      document.querySelector(selectorError).innerHTML = name + ' tu' + minLength + 'toi '
        + maxLength + 'ki tu';
      document.querySelector(selectorError).style.display = 'block';
      return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    document.querySelector(selectorError).style.display = 'none';
    return true;
  }

  // kiem tra gia tri 
  this.kiemTraGiaTri = function(value, name, selectorError, minLength, maxLength){
    if(Number(value) < minLength || Number(value) > maxLength){
      document.querySelector(selectorError).innerHTML = name + ' tu' + minLength + 'toi '
        + maxLength + 'diem';
      document.querySelector(selectorError).style.display = 'block';
      return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    document.querySelector(selectorError).style.display = 'none';
    return true;
  }

  // tat ca la chu 
  this.tatCaLaChu = function(value, name, selectorError){
    var regexLetter = /^[A-Za-z]+$/;
    if(regexLetter.test(value)){
      document.querySelector(selectorError).innerHTML = '';
      document.querySelector(selectorError).style.display = 'none';
      return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tat ca phai la chu';
    document.querySelector(selectorError).style.display = 'block';
    return false;
  }
}