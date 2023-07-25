module.exports = function() {
    return {
        surveys: [
            {
                _id: { $oid: "64b8cd9dfee58ce0a8f9e899" },
                name: "All about Weather",
                userid: {
                  $oid: "64af8fd980dd9f85a3f7e807"
                },
                creator: "mk",
                surveyType: "MCQ",
                questions: [
                  {
                    Question: "Least Favourite Season",
                    OptionOne: "Winter",
                    OptionTwo: "Autumn",
                    OptionThree: "Spring",
                    OptionFour: "Summer",
                    _id: {
                      $oid: "64b32624a777ca8edb11a069"
                    }
                  },
                  {
                    Question: "Favourite kind of day",
                    OptionOne: "Sunny and breezy",
                    OptionTwo: "Rain all day",
                    OptionThree: "Really Cold",
                    OptionFour: "Death Valley Hot",
                    id: {
                      $oid: "64b32624a777ca8edb11a06a"
                    }
                  }
                ],
                startDate: {
                  $date: { "$numberLong": "1689406129165" }
                },
                endDate: {
                  $date: { "$numberLong": "1689838129165" }
                },
                __v: { "$numberInt": "0" }
              },
              {
                _id: { $oid: "64b8cfaffee58ce0a8f9e89b" },
                name: "Transportation",
                userid: {
                  $oid: "64afef8dca296a19768f4450"
                },
                creator: "dave",
                surveyType: "MCQ",
                questions: [
                  {
                    Question: "Favourite method of travel?",
                    OptionOne: "Moped",
                    OptionTwo: "Citroen 2cv",
                    OptionThree: "Wings of an Eagle",
                    OptionFour: "Biplane",
                    _id: {
                      $oid: "64b24b73b5e9bc1ec079c9cf"
                    }
                  },
                  {
                    Question: "Which airplane is the smallest?",
                    OptionOne: "Pilatus Porter",
                    OptionTwo: "Boeing 777",
                    OptionThree: "cessna 172",
                    OptionFour: "Dash 8",
                    _id: {
                      $oid: "64b24b73b5e9bc1ec079c9d0"
                    }
                  }
                ],
                startDate: {
                  $date: { "$numberLong": "1689406323902" }
                },
                endDate: {
                  $date: { "$numberLong": "1689838323902" }
                },
                __v: { "$numberInt": "0" }
              },
              {
                _id: { $oid: "64b8cfdefee58ce0a8f9e89c" },
                name: "Travel",
                userid: {
                  $oid: "64af8fd980dd9f85a3f7e807"
                },
                creator: "admin",
                surveyType: "MCQ",
                questions: [
                  {
                    Question: "Favourite destination",
                    OptionOne: "Ha noi",
                    OptionTwo: "Fiji",
                    OptionThree: "Whistler",
                    OptionFour: "Mohammad's House",
                    _id: {
                      $oid: "64b2579fa3583dcecf58b699"
                    }
                  },
                  {
                    Question: "Type of Vacay?",
                    OptionOne: "Beach",
                    OptionTwo: "Snowboarding",
                    OptionThree: "Foodie",
                    OptionFour: "Doesn't matter",
                    _id: {
                      $oid: "64b2579fa3583dcecf58b69a"
                    }
                  }
                ],
                startDate: {
                  $date: { "$numberLong": "1689409439137" }
                },
                endDate: {
                  $date: { "$numberLong": "1689841439138" }
                },
                __v: { "$numberInt": "0" }
              },
              {
                _id: { $oid: "64b8cff9fee58ce0a8f9e89d" },
                name: "First SA survey",
                userid: {
                  $oid: "64af8fd980dd9f85a3f7e807"
                },
                creator: "admin",
                surveyType: "SA",
                questions: [
                  {
                    Question: "Fav Colour?",
                    _id: {
                      $oid: "64b262416b8fbb7cfabe827f"
                    }
                  },
                  {
                    Question: "Fav Food?",
                    _id: {
                      $oid: "64b262416b8fbb7cfabe8280"
                    }
                  }
                ],
                startDate: {
                  $date: { "$numberLong": "1689412161300" }
                },
                endDate: {
                  $date: { "$numberLong": "1689844161300" }
                },
                __v: { "$numberInt": "0" }
              },
              {
                _id: { $oid: "64b8d00dfee58ce0a8f9e89e" },
                name: "Dream Vacation",
                userid: {
                  $oid: "64b04fdc4038f37b48c37ce7"
                },
                creator: "Fawzia",
                surveyType: "SA",
                questions: [
                  {
                    Question: "What was your favorite vacation?",
                    _id: {
                      $oid: "64b2ecf0a8d7d877fc7cc5f4"
                    }
                  },
                  {
                    Question: "if you could go anywhere, where would you go?",
                    _id: {
                      $oid: "64b2ecf0a8d7d877fc7cc5f5"
                    }
                  }
                ],
                startDate: {
                  $date: { "$numberLong": "1689447022180" }
                },
                endDate: {
                  $date: { "$numberLong": "1689879022180" }
                },
                __v: { "$numberInt": "0" }
              }
        ]
    }

    
}
