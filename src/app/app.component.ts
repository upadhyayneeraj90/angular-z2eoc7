import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface Device {
  deviceUUID: string;
  ipAddress: string;
  deviceParameter: {
    deviceName: string;
    unitIdentifier: number;
    port: number;
  };
  isConnected: boolean;
  isSerial: boolean;
  details: any;
  Type: string;
}

const DEVICE_LIST: Device[] = [
  {
    deviceUUID: '80a9b8a2-3a2c',
    ipAddress: '2.2.2.67',
    deviceParameter: {
      deviceName: 'device44',
      unitIdentifier: 1,
      port: 502,
    },
    isConnected: false,
    isSerial: false,
    details: null,
    Type: 'Ethernet',
  },
  {
    deviceUUID: '80a9b8a2-3a2c',
    ipAddress: '2.2.2.67',
    deviceParameter: {
      deviceName: 'device46',
      unitIdentifier: 1,
      port: 503,
    },
    isConnected: false,
    isSerial: false,
    details: null,
    Type: 'Ethernet',
  },
  {
    deviceUUID: '80a9b8a2-3a2c',
    ipAddress: '2.2.2.67',
    deviceParameter: {
      deviceName: 'device48',
      unitIdentifier: 1,
      port: 505,
    },
    isConnected: false,
    isSerial: false,
    details: null,
    Type: 'Ethernet',
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaterialDesign';
  displayedColumns: string[] = ['deviceName', 'unitIdentifier', 'port'];
  dataSource = new MatTableDataSource<Device>(DEVICE_LIST);
  constructor() {
    // this.dataSource = new MatTableDataSource<Device>(DEVICE_LIST);
    this.dataSource.filterPredicate = (data: Device, filter: string) => {
      const searchString = filter.trim().toLowerCase();
      return data.deviceParameter.deviceName.toLowerCase().includes(searchString) ||
        data.deviceParameter.port.toString().toLowerCase().includes(searchString);
    };
  }
  applyFilter(event: Event) {
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
