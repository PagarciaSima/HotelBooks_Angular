export interface Hotel {
    id: number
    name: string
    price: number
    description: string
    picture: string
    street: string
    number: string
    cityName: string
    services: Service[]
    averageCalification: number
  }
  
  export interface Service {
    serviceId: number
    serviceName: string
  }
  