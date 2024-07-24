class Ramadan {
  constructor() {
    this.meses = [
      'Muharram',
      'Safar',
      'Rabi al-Awwal',
      'Rabi al-Thani',
      'Jumada al-Awwal',
      'Jumada al-Thani',
      'Rajab',
      'Sha\'aban',
      'Ramadan',
      'Shawwal',
      'Dhu al-Qidah',
      'Dhu al-Hija'
    ];
  }

  oMelhor(){
    let grande;
    for (let mes of this.meses){
      if('Ramadan' === mes){
        mes = grande;
        break;
      }
    }
    return grande;
  }
}

const mes = new Ramadan();
console.log(mes.oMelhor());

class التقويم {
  constructor() {
    this.الأشهر = {
      "يناير": 1,
      "فبراير": 2,
      "مارس": 3,
      "إبريل": 4,
      "مايو": 5,
      "يونيو": 6,
      "يوليو": 7,
      "أغسطس": 8,
      "سبتمبر": 9,
      "أكتوبر": 10,
      "نوفمبر": 11,
      "ديسمبر": 12
    };
    this.رمضان = "رمضان";
  }

  العثور_على_رمضان() {
    let كبير;
    for (const شهر in this.الأشهر) {
      if (شهر === this.رمضان) {
         شهر=كبير ;
        return كبير;
      }
    }
    return "رمضان غير موجود!";
  }
}

// مثال على الاستخدام
const التقويم_الخاص_بي = new التقويم();
console.log("شهر رمضان هو:", التقويم_الخاص_بي.العثور_على_رمضان());

