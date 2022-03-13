class ReadAllDto {
  constructor({ id, name, nickname, country, birthday, age, height, weight }) {
    this.id = id ?? 0
    this.name = name ?? null
    this.nickname = nickname ?? null
    this.country = country ?? null
    this.birthday = birthday ?? null
    if (this.birthday !== null) {
      this.birthday = this.dateToString(birthday)
    }
    this.age = age ?? null
    this.height = height ?? null
    this.weight = weight ?? null

    this.dateToString = this.dateToString.bind(this)
    this.toJson = this.toJson.bind(this)
  }

  dateToString(date) {
    const dateBirthday = new Date(date)
    const year = dateBirthday.getFullYear()
    let month = dateBirthday.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    let day = dateBirthday.getDate()
    if (day < 10) {
      day = '0' + day
    }
    return `${year}-${month}-${day}`
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      nickname: this.nickname,
      country: this.country,
      birthday: this.birthday,
      age: this.age,
      height: this.height,
      weight: this.weight,
    }
  }
}

export default ReadAllDto
