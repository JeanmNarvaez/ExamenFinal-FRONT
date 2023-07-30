import { Component ,OnInit} from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = null;
  id: number = 0;
  name: string = '';
  email: string = '';


  constructor(private userService: UserService){
    this.getUsers();
  }


  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.findUsers().subscribe(response =>{
      this.user = response;
    });
  }

  getUser(id: number){
    this.userService.findUser(id).subscribe(response =>{
      console.log(response);
    });
    
  }

  createUser(){
    const payload ={
      name: this.name,
      email: this.email,
    }
    this.userService.createUser(payload).subscribe(response =>{
      this.getUsers();
      alert('creado');
    });
  }

  updateUser(){
    const payload = {
      name: this.name,
      email: this.email,
    }
    this.userService.updateUser(this.id, payload).subscribe(response =>{
      alert('se actualizo');
    });
  }

  deleteUser(){
    this.userService.deleteUser(this.id).subscribe(response =>{
      alert('se elimino');
    });
  }

}
