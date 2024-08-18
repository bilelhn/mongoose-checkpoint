import Person from "../models/person.js"

export const createPerson= async (req,res)=>{
   try {
    const person = await Person.create(req.body);
    res.json(person);
   } catch (error) {
    console.log(error)
   }
}


export const getAllPersons= async (req,res)=>{
    try {
        const person = await Person.find();
        res.json(person);
       } catch (error) {
        console.log(error)
       }
}

export const getPerson= async (req,res)=>{
    try {
        const {id}=req.params;
        const person = await Person.find({_id:id});
        res.json(person);
       } catch (error) {
        console.log(error)
       }
}


