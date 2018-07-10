import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Issue } from '../../models/issue.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    this.fetchIssues();
  }

  public fetchIssues(): void {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
    });
  }

  public editIssue(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }

  public deleteIssue(id: number): void {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}
