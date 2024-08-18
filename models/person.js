import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: [String], // Un tableau de chaînes de caractères
});

const Person = mongoose.model('Person', personSchema);

export default Person;
