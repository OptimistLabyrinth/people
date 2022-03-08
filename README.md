# People: CRUD test project

when I learn new framework,
I want to use this repository for my practice

# API Design

`! (exclamation mark)` after the type means the field is `Non-Null`

## Create

```graphql
input {
  name: string!
  nickname: string
  country: string
  birthday: string
  age: int
  height: int
  weight: int
}
```

```graphql
output {
  # field `msg` shows the result of the operation
  # success: 'OK'
  msg: string!
}
```

## Read All

```graphql
input {
   # None
}
```

```graphql
output {
  # if the operation succeed, it responds with the data as 'result' and OK as 'msg'
  result: [EachResultReadAll]
  # if the operation has any error, it responds with msg that summarizes the error
  msg: string!
}

type EachResultReadAll {
  id: int!
  name: string!
  nickname: string
  country: string
  birthday: string
  age: int
  height: int
  weight: int
}
```

## Edit One

```graphql
input {
  id: int!
  # all the fields except id are optional
  # so only the updated field is included in the request body
  name: string
  nickname: string
  country: string
  birthday: string
  age: int
  height: int
  weight: int
}
```

```graphql
output {
  msg: string!
}
```

## Delete Many

```graphql
input {
  ids: [int!]!
}
```

```graphql
output {
  msg: string!
}
```
