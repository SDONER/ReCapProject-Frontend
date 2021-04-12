import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { FileUploader } from 'ng2-file-upload';
import { CarDetailComponent } from '../car-detail/car-detail.component';
import { CarDetail } from 'src/app/models/carDetailDto';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {
  carAddForm : FormGroup;
  imagePath:CarDetail[]=[];
  uploader:FileUploader;
  hasBadeDropZoneOver= false;
  apiUrl="http://localhost:44381/api";
  currentPhoto:CarDetailComponent;
  currentCar:CarDetail;

  constructor(
    private carService:CarService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService , 
    private formBuilder:FormBuilder ,
    private fileUploader:FileUploader,
    private imageModel:Image
  ) { }

  ngOnInit(): void {
    this.createCarPhotoAddForm();
  }

  createCarPhotoAddForm(){
    this.uploader = new FileUploader({
      url:this.apiUrl+'cars/'+this.currentPhoto +'photo',
      isHTML5: true,
      allowedFileType: ["image"],
      autoUpload:false,
      removeAfterUpload:true,
      maxFileSize:10*1024*1024

      
    })
  }

  addImage(){
    this.uploader.onSuccessItem = (item,response,status,headers)=>{
      if(response){
        const img : CarDetail = JSON.parse(response);
        const image = {
          id:img.id,
          url:img.imagePath
       }
      }
    }
  }

  


}
