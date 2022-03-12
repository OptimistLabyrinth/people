class ReadAllDto {
  constructor({ id, name, nickname, country, birthday, age, height, weight }) {
    this.id = id ?? 0
    this.name = name ?? null
    this.nickname = nickname ?? null
    this.country = country ?? null
    this.birthday = birthday ?? null
    this.age = age ?? null
    this.height = height ?? null
    this.weight = weight ?? null

    this.toJson = this.toJson.bind(this)
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
