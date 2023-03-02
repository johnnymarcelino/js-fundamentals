// VALIDATOR: evitar falhas em documentos através das informações passadas

db.createCollection("cars", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["model", "year"],
            properties: {
                model: {
                    bsonType: "string",
                    description: "o modelo é necessário e deve ser uma string"
                },
                madeBy: {
                    bsonType: "string",
                    minLength: 3
                },
                year: {
                    bsonType: "number",
                    minimum: 1980,
                    maximum: 2025
                }
            }
        }
    }
})

{
        "model" : "Onix",
        "madeBy" : "Chevrolet",
        "year" : "2020"
}


// { "_id" : ObjectId("63ffb735341527895af289ef"), "model" : "Fiesta", "madeBy" : "Ford", "year" : 2015 }
// { "_id" : ObjectId("63ffb7d1341527895af289f0"), "model" : "Fusca", "madeBy" : "Volkswagen", "year" : "2012" }
// { "_id" : ObjectId("63ffb7f5341527895af289f1"), "model" : "Onix", "madeBy" : "Chevrolet", "year" : 2020 }

{ "model" : "Fiesta", "madeBy" : "Ford", "year" : 2015 }
{ "model" : "Fusca", "madeBy" : "Volkswagen", "year" : "2012" }
{ "model" : "Onix", "madeBy" : "Chevrolet", "year" : 2020 }


// ------------------------------------------------------------------------------- //


// CAPPED : funciona como uma fila, exclue ou limita o armazenamento de acordo com o filtro

db.createCollection("logs", {
    capped: true,
    size: 2048,
    max: 5
})
