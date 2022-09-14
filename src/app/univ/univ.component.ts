import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUniv, Univ, editUniv } from './model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-univ',
  templateUrl: './univ.component.html',
  styleUrls: ['./univ.component.css'],
})
export class UnivComponent implements OnInit {
  closeResult = '';

  UnivList: Univ[] = [];

  univ: NewUniv = {
    univ_name: '',
  };

  updateUniv: editUniv = {
    univ_id: 0,
    univ_name: '',
  };

  delUniv: any = {
    univ_id: '',
  };

  constructor(
    private httpClient: HttpClient,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getUniv();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  addUniv() {
    this.httpClient
      .post<NewUniv>(environment.baseUrl + '/univ/addUniv.php', this.univ, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => {
        this.getUniv();
        this.univ.univ_name = '';
      });
  }

  sendUniv(univ: Univ) {
    this.updateUniv = univ;
  }

  editUniv(univ: editUniv) {
    this.httpClient
      .put<Univ>(environment.baseUrl + '/univ/editUniv.php', univ, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => {
        this.getUniv();
      });
  }

  deleteUniv(univ_id: Number) {
    if (confirm('คุณต้องการลบข้อมูลวิทยาเขตนี้ใช่หรือ ไม่ !')) {
      this.delUniv.univ_id = univ_id;
      this.httpClient
        .post<any>(environment.baseUrl + '/univ/deleteUniv.php', this.delUniv, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getUniv();
        });
    }
  }

  getUniv() {
    this.httpClient
      .get<Univ[]>(environment.baseUrl + '/univ/getUniv.php')
      .subscribe((response) => {
        this.UnivList = response;
      });
  }
}
