import ProductDalService from '@/persistence/product.dal';
import ServicesDalService from '@/persistence/service.dal';
import UserDalService from '@/persistence/user.dal';
import Container, { Constructable, ContainerInstance } from 'typedi';

export function ProductInterface() {
  return function (object: Constructable<unknown>, propertyName: string, index?: number) {
    const templateDalService = new ProductDalService();
    Container.registerHandler({ object, propertyName, index, value: containerInstance => templateDalService });
  };
}

export function ServiceInterface() {
  return function (object: Constructable<unknown>, propertyName: string, index?: number) {
    const serviceDalService = new ServicesDalService();
    Container.registerHandler({ object, propertyName, index, value: containerInstance => serviceDalService });
  };
}

export function UserInterface(){
  return function (object: Constructable<unknown>,propertyName: string,index?:number){
    const userDalService= new UserDalService();
    Container.registerHandler({object,propertyName,index,value: ContainerInstance=>userDalService})
  }
}