import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      lowercase: true,
      
    },

    clima: {
      type: String,
      required: true,
     
    },

    terreno: {
        type: String,
        required: true,
       
      },

    qtdeAparicoes: {
      type: String,
      required: false,
    }

    
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
)
export const PlanetModel = mongoose.model('Planet', schema)