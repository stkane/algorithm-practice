// Implement a function createSecretHolder(secret) 
// which accepts any value as secret and returns an 
// object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2


function createSecretHolder(secret){
  this.setSecret = function(_secret){
    this.getSecret = function(){
      return _secret;
    };
  };
  this.setSecret(secret);
}

var obj = new createSecretHolder(5);
console.log(obj.getSecret()); //returns 5
console.log(obj.setSecret(2)); 
console.log(obj.getSecret()); //returns 2
