class User {
    constructor(props){
            this.id =props.id; 
            this.nom =props.nom;
            this.prenom = props.prenom;
            this.age = props.age;
            this.domaine = props.domaine;
            this.attache = props.attache;
            this.tel = props.tel;
            this.dateAjout = props.dateAjout;
            this.statutPaie = props.statutPaie;
            this.Montant = props.Montant
            this.statut= props.statut;
            this.tacheTerminer=props.heureTerminer
            this.heureTerminer=props.heureTerminer 
    }
    setCreateUser(data){
        let recup =  localStorage.getItem("user");
         recup = JSON.parse(recup)
        if(recup != null){
            recup.push(data);
            localStorage.setItem("user", JSON.stringify(recup));
        }
        else{
            recup = [];
            recup.push(data);
            localStorage.setItem("user", JSON.stringify(recup))
        }
    }
    getAddUser(){
        let data = localStorage.getItem("user");
        if(data != null){
            data =  JSON.parse(data)
        }
        else{
            data = []
        }
        return data
    }
    getUpdateUser(id,newData){
        let recup = localStorage.getItem("user");
        recup = JSON.parse(recup);
        let data;
        recup = recup.map(item => {
            if(item.id === id){
                data = {
                    id :item.id, 
                    nom :newData.nom,
                    prenom : newData.prenom,
                    age : newData.age,
                    domaine : newData.domaine,
                    attache : newData.attache,
                    tel : newData.tel,
                    dateAjout : newData.dateAjout,
                    statutPaie : newData.statutPaie,
                    Montant : newData.Montant,
                    statut: newData.statut,
                    tacheTerminer:newData.heureTerminer,
                    heureTerminer:newData.heureTerminer 
                }
            }
            else{
                return item
            }
            return data
        })
        localStorage.setItem("user", JSON.stringify(recup))
    }
}

class Tache{
    constructor(obj){
        this.id = obj.id;
        this.tache  = obj.tache;
        this.dateAjout = obj.dateAjout;
        this.dateTerminer = obj.dateTerminer;
    }
    setCreateTache(data){
        let recup = localStorage.getItem("tache");
        recup = JSON.parse(recup);
        if(recup != null){
            recup.push(data);
            localStorage.setItem("tache", JSON.stringify(recup))
        }
        else{
            recup = [];
            recup.push(data);
            localStorage.setItem("tache", JSON.stringify(recup));
        }
    }
    getAddTache(){
        let recup = localStorage.getItem("tache");
        if(recup != null){
            return JSON.parse(recup)
        }
        else{
            return []
        }
    }
    getUpdateTache(id, donne){
        let recup = localStorage.getItem("tache");
        recup = JSON.parse(recup);
        if(recup != null){
            recup = recup.map(item =>{
                let data;
                if(item.id == id){
                    data ={
                        id: item.id,
                        tache: donne.tache,
                        dateAjout:donne.dateAjout,
                        dateTerminer:donne.dateTerminer
                    }
                }
                else{
                    return item
                }
                return data
            })
            localStorage.setItem("tache", JSON.stringify(recup));
        }
        else{
            console.log("Table nulle !!!!!");
        }
    }
    Delete(id){
        let recup = localStorage.getItem("tache");
        recup = JSON.parse(recup);
        recup = recup.filter(item => item.id != id);
        localStorage.setItem("tache",JSON.stringify(recup));
    }

}

class AdminAjout {
    constructor(obje){
        this.id = obje.id;
        this.nomPrenom= obje.nomAdmin;
        this.user= obje.userAdmin;
        this.psw= obje.pwdAdmin;
        this.numero= obje.numero;
        this.email= obje.emailAdmin;
        this.fonction= obje.fonctionAdmin;
        this.statut= obje.statut;
    }
    getAddAdmin(data){
        let recup = localStorage.getItem("admin");
        recup = JSON.parse(recup);
        if(recup != null){
            recup.push(data);
            localStorage.setItem("admin",JSON.stringify(recup));
        }
        else{
            recup =[];
            recup.push(data);
            localStorage.setItem("admin",JSON.stringify(recup));
        }
    }
    updateadmin(id, data){
        let value = localStorage.getItem("admin");
        value = JSON.parse(value);
        value = value.map(item => {
            let val 
            if(item.id == id){
                val = {
                    id: item.id,
                    nomPrenom:data.nomPrenom,
                    user:data.user,
                    psw :data.psw,
                    numero:data.numero,
                    email:data.email,
                    fonction:data.fonction,
                    statut:data.statut
                }
            }
            else{
                return item
            }
            return val;

        })
        localStorage.setItem("admin", JSON.stringify(value));

    }
}


let dat ={
    id:1,
    tache: "devellopement",
    dateAjout:"07/04/2023",
    dateTerminer:"En cours"

}
let obj ={
    id:1,
    tache: "devellopement web et mobile",
    dateAjout:"07/04/2023",
    dateTerminer:"En cours"

}
let data = {
        id :1, 
        nom :"konan",
        prenom : "abraham",
        age : 22,
        domaine : "Informaticien",
        attache : "web mobile",
        tel : "0708889205",
        dateAjout : "06/04/2023",
        statutPaie : "Non payer",
        Montant : 0,
        statut: true,
        tacheTerminer:"en cours",
        heureTerminer:"" 
        }
// let donne = {
//             id :1, 
//             nom :"konan",
//             prenom : "abraham",
//             age : 23,
//             domaine : "Informaticien",
//             attache : "App mobile",
//             tel : "0708889205",
//             dateAjout : "06/04/2023",
//             statutPaie : "Non payer",
//             Montant : 0,
//             statut: true,
//             tacheTerminer:"en cours",
//             heureTerminer:"" 
//             }
const user = new User(data)
// user.setCreateUser(data)
// let val = user.getAddUser()
// user.getUpdateUser(1,donne)
// console.log(val)
const tache = new Tache(dat);
// tache.setCreateTache(dat)
// tache.getUpdateTache(1,obj)
// tache.Delete(1)
// console.log(tache.getAddTache())

let meDAta = {
    nomPrenom:"nomAdmin",
    user:"userAdmin",
    psw :"pwdAdmin",
    numero:"0141822918",
    email:"emailAdmin",
    fonction:"fonctionAdmin",
    statut:"statut"
}
let vale = {
    id: 1,
    nomPrenom:"abraham",
    user:"AbrahamAdmin",
    psw :"12345678",
    numero:"0141822918",
    email:"emailAdmin",
    fonction:"fonctionAdmin",
    statut:"admin"
}
const ajoutAdmin = new AdminAjout(meDAta)
// ajoutAdmin.getAddAdmin(meDAta)