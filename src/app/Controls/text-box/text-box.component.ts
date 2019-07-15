import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data-service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html'
})
export class TextBoxComponent implements OnInit {
  @Input() public DataPath: string;
  constructor(private ds: DataService) { }

  ngOnInit() {
  }
  get data() {
    if (this.ds.container.get(this.DataPath) === undefined) {
      this.ds.container.addControl(this.DataPath, new FormControl(''));
    }
    return this.ds.container.get(this.DataPath);
  }
}