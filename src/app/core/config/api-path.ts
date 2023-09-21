import { API } from 'src/environments/environment';
import { ApiPathConfig } from './api-path-config';

export class ApiPath {
    public static GET_USERS = API.concat(ApiPathConfig.service.homePage.getUsers);

}