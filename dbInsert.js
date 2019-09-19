/*
* Project Script
*
*/
print("STARTING SCRIPT");
//Host
conn = new Mongo("localhost");
//Database Name
db = conn.getDB("dbmicroservicios");
/Clean Database if already exists/
db.dropDatabase();
/Collection creation/
db.createCollection("Student");
db.createCollection("Parents");
print("***********creating students*********");
student1= {
"_id" : "1",
"fullname" : "Edgar",
"gender" : "Male",
"birthday" : ISODate("1950-09-16T05:00:00Z"),
"typedoc" : "DNI",
"document" : "111111"
}
student2= {
"_id" : "2",
"fullname" : "Gonzalo",
"gender" : "Male",
"birthday" : ISODate("1960-09-16T05:00:00Z"),
"typedoc" : "DNI",
"document" : "222222"
}
student3= {
    "_id" : "3",
"fullname" : "Marcos",
"gender" : "Male",
"birthday" : ISODate("1950-09-16T05:00:00Z"),
"typedoc" : "DNI",
"document" : "333333",
}
student4= {
    "_id" : "4",
"fullname" : "Andres",
"gender" : "Male",
"birthday" : ISODate("1950-09-16T05:00:00Z"),
"typedoc" : "DNI",
"document" : "444444",
}
print("***********creating parents*********");
/* parent */
parent1= {
	     "_id" : "1",
       "fullname" : "Pedro",
       "gender" : "Male",
       "birthday" : ISODate("1960-03-22T00:00:00Z"),
       "typedoc" : "DNI",
       "document" : "555555",
	      "idstudent" : "1",
	    "idfamily" : "Romero"
};
parent2= {
     	"_id" : "2",
      "fullname" : "Maria",
       "gender" : "Male",
       "birthday" : ISODate("1970-03-22T00:00:00Z"),
       "typedoc" : "DNI",
       "document" : "666666",
	    "idstudent" : "1",
	     "idfamily" : "Romero"
};
parent3= {
       "_id" : "3",
       "fullname" : "Carlos",
       "gender" : "Male",
       "birthday" : ISODate("1960-03-22T00:00:00Z"),
       "typedoc" : "DNI",
       "document" : "777777",
	      "idstudent" : "1",
	       "idfamily" : "Romero"
};
parent4= {
     	"_id" : "4",
       "fullname" : "Juan",
       "gender" : "Male",
       "birthday" : ISODate("1980-03-22T00:00:00Z"),
       "typedoc" : "DNI",
       "document" : "888888",
	     "idstudent" : "2",
	     "idfamily" : "Quispe"
};
parent5= {
	     "_id" : "5",
       "fullname" : "Ines",
       "gender" : "Female",
       "birthday" : ISODate("1970-03-22T00:00:00Z"),
       "typedoc" : "DNI",
       "document" : "999999",
	      "idstudent" : "2",
	       "idfamily" : "Quispe"
};
parent6= {
       "_id" : "6",
      "fullname" : "Andres",
       "gender" : "Male",
       "birthday" : ISODate("1990-03-22T00:00:00Z"),
       "typedoc" : "DNI",
       "document" : "112233",
	     "idstudent" : "2",
     	"idfamily" : "Quispe"
};
print("***********saving students*********");
db.Student.save(student1);
db.Student.save(student2);
db.Student.save(student3);
db.Student.save(student4);
print("***********saving parents*********");
db.Parents.save(parent1);
db.Parents.save(parent2);
db.Parents.save(parent3);
db.Parents.save(parent4);
db.Parents.save(parent5);
db.Parents.save(parent6);
print("SCRIPT FINISHED");
