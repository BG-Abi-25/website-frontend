import { Component } from '@angular/core';
import { BlogComponent } from "./blog/blog.component";

@Component({
  selector: 'app-blogs',
  imports: [BlogComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  index = [
    0,1,2
  ]
  pictures_url = [
    "https://bg.schorndorf.de/dateien/website/Fotos/2024-2025/Logo_fuer_Website.jpg",
    "https://bg.schorndorf.de/dateien/website/Fotos/2024-2025/Bild_every_name_counts.jpg",
    "https://bg.schorndorf.de/dateien/website/Fotos/2024-2025/IMG_4394.JPG",
    ];

  header_text = [
    "Tag der offenen Tür",
    "everynamecounts",
    "Total vernetzt - Medienbildung und Medienprävention für Fünftklässler"
  ];

  preview_text = [
    "Das Burg-Gymnasium in Schorndorf stellt sich am 7. Februar mit einem breitgefächerten Angebot Grundschülern und Eltern vor. Besucher können sich von 15:00 bis ca. 18 Uhr einen Eindruck von der Schule machen. Schulleiter Marcus Vornhusen begrüßt die Gäste um 15 Uhr in der Karl-Wahl-Sporthalle (um pünktliches Erscheinen wird gebeten, da gleich zu Beginn die Einteilung in Führungsgruppen erfolgt).",
    "Am 27. Januar 2025 war der 80. Jahrestag der Befreiung des Konzentrationslager Auschwitz-Birkenau. In diesem Kontext haben unsere 9. KlässlerInnen im Geschichtsunterricht die Arolsen Archives unterstützt. Die Arolsen Archives sind ein Archiv zur Dokumentation von Opfern und Überlebenden des Nationalsozialismus. Die Sammlung, welche zum UNESCO-Weltdokumentenerbe gehört, setzt sich mit unterschiedlichen Opfergruppen der NS-Diktatur auseinander.",
    "Am 28. Januar kamen wieder einmal alle unsere 5. Klassen in der Manufaktur in den Genuss einer Vorstellung des Präventionstheaters Q-Rage. Das interaktive Theaterstück Total vernetzt und alles klar befasst sich mit der hochaktuellen und sich schnell verändernden Welt der modernen Medien. Es nimmt WhatsApp, TikTok & Co und nun auch KI genauer unter die Lupe, beleuchtet unter anderem das scheinbar harmlose Weiterleiten von Handyvideos und Stickern oder das Beachten von Regeln im Klassenchat gibt es die denn?",
  ]

}
