import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    features = [
      {
        "heading": "User Authentication",
        "data": [
          "Implement a secure user authentication system to ensure that users can log in securely.",
          "Include features like password recovery and account management for a seamless user experience."
        ]
      },
      {
        "heading": "Intuitive User Interface",
        "data": [
          "Design an intuitive and user-friendly interface to make note-taking and organization simple.",
          "Use clear navigation and organize notes in a way that's easy for users to understand."
        ]
      },
      {
        "heading": "Note Creation and Editing",
        "data": [
          "Allow users to create, edit, and delete notes effortlessly.",
          "Support various formatting options (e.g., text styling, bullet points) for richer note content."
        ]
      },
      {
        "heading": "Organization and Categorization",
        "data": [
          "Implement folders, tags, or categories to help users organize their notes efficiently.",
          "Provide the ability to sort or search notes for quick access."
        ]
      },
      {
        "heading": "Sync Across Devices",
        "data": [
          "Enable synchronization of notes across multiple devices to ensure users can access their content from anywhere."
        ]
      },
      {
        "heading": "Offline Access",
        "data": [
          "Implement offline functionality so that users can view and edit their notes without an internet connection."
        ]
      },
      {
        "heading": "Collaboration Features",
        "data": [
          "Include collaboration features, allowing users to share and collaborate on notes with others.",
          "Implement real-time editing or commenting for shared notes."
        ]
      },
      {
        "heading": "Reminders and Alerts",
        "data": [
          "Provide users with the ability to set reminders for important notes or tasks.",
          "Include notifications or alerts to remind users of upcoming events or deadlines."
        ]
      },
      {
        "heading": "Data Security",
        "data": [
          "Prioritize data security by implementing encryption and secure protocols for data transmission.",
          "Regularly backup user data to prevent data loss."
        ]
      },
      {
        "heading": "Customization Options",
        "data": [
          "Allow users to customize the appearance of the app, such as themes or font preferences.",
          "Provide options for users to personalize their note-taking experience."
        ]
      },
      {
        "heading": "Integration with Other Tools",
        "data": [
          "Integrate with popular third-party tools or services, such as calendar apps or cloud storage, to enhance functionality."
        ]
      },
      {
        "heading": "Version History",
        "data": [
          "Implement version history for notes, allowing users to revert to previous versions if needed."
        ]
      },
      {
        "heading": "Feedback and Support",
        "data": [
          "Include a feedback mechanism for users to provide suggestions or report issues.",
          "Offer customer support channels for users to seek assistance when needed."
        ]
      },
      {
        "heading": "Cross-Platform Compatibility",
        "data": [
          "Develop the app to be compatible with various platforms (web, mobile, desktop) for a seamless user experience."
        ]
      },
      {
        "heading": "Accessibility",
        "data": [
          "Ensure the app is accessible to users with disabilities by following accessibility guidelines and standards."
        ]
      }
    ]
  
  rolled:boolean[] = [false,false,false,false,false];
  toggleRoll(index:number){
    this.rolled[index] = !this.rolled[index];
  }
}
