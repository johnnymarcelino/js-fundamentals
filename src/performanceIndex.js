// irmão do insertone - cria a base do banco de dados, sem trocar de base

// trabalhando com getsiblingdb - possivel trabalhar com com a base sem alterar
db.getSiblingDb('name_base').collection.insertOne({name: "The_first_data", position: "The_second_data"})
db.getSiblingDb('minha_base').people.insertOne({name: "Johnny Gabriel", position: "developer"})

// find com getsiblingdb
db.getSiblingDb('minha_base').people.find().pretty()
