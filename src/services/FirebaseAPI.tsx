import axios from 'axios';

export default class FirebaseService {

    static getRecipePseudo(pseudo: string): Promise<object> {
        return axios
        .get(`https://recipe-react-41cd5-default-rtdb.europe-west1.firebasedatabase.app/${pseudo}.json`)
        .then(response => response.data)
        .catch(error => this.handleError(error));
    }

    static postRecipe(recipes: object, pseudo: string): Promise<object> {
        return axios
        .post(`https://recipe-react-41cd5-default-rtdb.europe-west1.firebasedatabase.app/${pseudo}.json`, {
        ...recipes,
        })
        .then(response => response.data)
        .catch(error => this.handleError(error))
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}