import { Component, OnInit } from '@angular/core';
import { TvServiceService } from '../tv-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tvshow-display',
  templateUrl: './tvshow-display.component.html',
  styleUrls: ['./tvshow-display.component.css']
})
export class TvshowDisplayComponent implements OnInit {
  public TvShow = [];
  public filterData:any = [];

  closeResult: string;

  constructor(private tvService: TvServiceService,private modalService: NgbModal) { }

  ngOnInit() {
    var curTv = this.tvService.getTvDetail()
      .subscribe(data => this.TvShow = data);
      // this.filterContent();
      // this.TvShow.push(curTv);
      // console.log(this.TvShow);
  }

  open(content:any,id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.filterData = this.TvShow.filter(fil => fil.id === id);
    return console.log(this.filterData);

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
