export interface User{
   
    
        empId: number,
        empName: string,
        mobileNumber: string,
        emailId: string,
        officeTransport: string,
        cafeteriaSubscription:any ,
        project:[{
            name:string,
            role:string,
            capaity:string

        }]


}