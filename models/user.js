var mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1');

var userSchema = new mongoose.Schema({
    name : {
      type :String,
      required:true,
      maxlength :32,
      trim: true,
    },
    lastname : {
      type : String,
      maxlength :32,
    },
    email:{
      type : String,
      maxlength :32,
      trim:true,
      unique :true,
    },
    userinfo: {
        type:String,
        trim:true,
    },
    //TODO
    encrypT_password :{
       type:String,
       required:true,
    },
    
    salt: String,


    role : {
        type:Number,
        default : 0,
    },
    purchases:{
        type:Array,
        default:[],
    }
}, {timestamps : true});


userSchema.virtual("password")
      .set(function(password) {
        this._password = password
        this.salt = uuidv1()
        this.encrypT_password = this.securePassword(password);
      })
      .get(function(){
        return this._password
      })

userSchema.method = {

  authenticate: function(plainpassword){
    return this.securePassword(plainpassword === this.encrypT_password)
  },

  securePassword: function(plainpassword){
    if(!password) return "";
    try{
      return crypto.createHmac('sha256', this.salt)
      .update(plainpassword)
      .digest('hex')
    }catch (err){
        return "";
    }

  }
}

module.exports = mongoose.model("User",userSchema);