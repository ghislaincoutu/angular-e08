import { Component } from '@angular/core';

@Component({
  selector: 'app-t02',
  templateUrl: './t02.component.html',
  styleUrls: ['./t02.component.scss']
})
export class T02Component {

  userRecords = [
    {
      id: 1,
      name: "Louis Trudel",
      username: "louis.trudel",
      email: "louis.trudel@test.local"
    },
    {
      id: 2,
      name: "Jean Beaudoin",
      username: "jean.beaudoin",
      email: "jean.beaudoin@test.local"
    },
    {
      id: 3,
      name: "François Marcotte",
      username: "francois.marcotte",
      email: "francois.marquotte@test.local"
    },
    {
      id: 4,
      name: "Patricia Leblanc",
      username: "patricia.leblanc",
      email: "patricia.leblanc@test.local"
    },
    {
      id: 5,
      name: "Jacques Demers",
      username: "jacques.demers",
      email: "jacques.demers@test.local"
    },
    {
      id: 6,
      name: "Louis Ladouceur",
      username: "louis.ladouceur",
      email: "louis.ladouceur@test.local"
    },
    {
      id: 7,
      name: "Robert Letendre",
      username: "robert.letendre",
      email: "robert.letendre@test.local"
    },
    {
      id: 8,
      name: "Suzanne Lalonde",
      username: "suzanne.lalonde",
      email: "suzanne.lalonde@test.local"
    },
    {
      id: 9,
      name: "Sylvie Francoeur",
      username: "sylvie.francoeur",
      email: "sylvie.francoeur@test.local"
    },
    {
      id: 10,
      name: "Linda Jutras",
      username: "linda.jutras",
      email: "linda.jutras@test.local"
    }
  ]

}
