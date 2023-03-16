// irmão do insertone - cria a base do banco de dados, sem trocar de base

// trabalhando com getsiblingdb - possivel trabalhar com com a base sem alterar
db.getSiblingDb('name_base').collection.insertOne({name: "The_first_data", position: "The_second_data"})
db.getSiblingDb('minha_base').people.insertOne({name: "Johnny Gabriel", position: "developer"})

// find com getsiblingdb
db.getSiblingDb('minha_base').people.find().pretty()



// função para adicionar dados à base

function populatePeople() {
    const firstNames = [
        'Rena',
        'Rafael',
        'João',
        'Mario',
        'Paulo',
        'Johnny',
        'José',
        'Lucas',
        'Carlos',
        'Antonio',
    ];
    const lastNames = [
        'Pallin',
        'Souza',
        'Silva',
        'Oliveira',
        'Santos',
        'Ferreira',
        'Pereira',
        'Costa',
        'Nascimento',
        'Alves',
    ];

    function _randomInt(start = 0, end = 100) {
        return Math.floor(Math.random() * (start - end) + end);
    }

    const labDb = db.getSiblingDB('lab');
    
    let = _id = 0;
    
    while (_id++ < 1e2) {
        const name =
            firstNames[_randomInt(0, firstNames.length - 1)] +
            " " +
            lastNames[_randomInt(0, lastNames.length - 1)];
        
        labDb.people.insert({
            _id,
            name,
            age: _randomInt(12, 120),
            height: _randomInt(140, 120),
        });
        
        if(_id % 2 === 0) print(`Inserimos ${_id} documentos...`);
    }
    print('Prontinho! 100 UNIDADES de documentos inseridos')
}


// utilizando limit()

 // mesma busca por insertone(), podemos alterar esse limite
db.people.find( { name: /^Johnny/, height: 133} ).limit(1) 

// trabalhando com projection_covered - supra sumo


// utilizando uma busca sem documentos examidados - covered queries
db.people.find( { name: /^Johnny/, height: 133}, { _id: 0, name: 1, height: 1 } ).explain( "executionStats" )

