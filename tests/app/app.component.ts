import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
<StackLayout orientation="vertical">
    <Label [text]="message" class="title" (tap)="message = 'OHAI'"></Label>
</StackLayout>
`,
})
export class AppComponent {
    public message: string = "Hello, Angular!";
}
