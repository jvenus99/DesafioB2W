import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      
    },

    clima: {
      type: String,
      required: true,
     
    },

    terreno: {
        type: String,
        required: true,
       
      },

    
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
)
export const PlanetModel = mongoose.model('Planet', schema)