const knowledgeModules = [
  {
    id: "bhp",
    number: "01",
    icon: "!",
    title: "BHP i organizacja pracy",
    intro: "Bezpieczne przygotowanie stanowiska, komunikacja i reagowanie na zagrożenia.",
    sections: [
      {
        title: "Zasada nadrzędna",
        content: `<p>Żaden efekt, termin ani cue nie usprawiedliwia pracy poza kwalifikacjami lub procedurą. Przed montażem ustal osobę odpowiedzialną, zakres zadań, kanał komunikacji, strefy niebezpieczne i sposób zatrzymania pracy.</p><div class="callout danger"><strong>STOP WORK:</strong> przerwij pracę przy uszkodzonym sprzęcie, nieznanym zasilaniu, braku zabezpieczenia przed upadkiem, osobach pod podwieszanym ładunkiem lub niejasnym poleceniu.</div>`
      },
      {
        title: "Przed rozpoczęciem",
        content: `<ul><li>Przejdź odprawę i poznaj plan ewakuacji, punkty pierwszej pomocy oraz wyłączniki awaryjne.</li><li>Sprawdź ocenę ryzyka, kolejność prac i wymagane ŚOI.</li><li>Wygrodź strefę pod pracą na wysokości; zabezpiecz narzędzia przed upadkiem.</li><li>Nie pracuj pod zawieszonym ładunkiem i nie przekraczaj uprawnień przy riggingu lub instalacji elektrycznej.</li><li>Utrzymuj drogi komunikacyjne i wyjścia ewakuacyjne bez kabli, case’ów i elementów scenografii.</li></ul>`
      },
      {
        title: "Komunikacja zespołu",
        content: `<p>Stosuj krótkie, jednoznaczne komunikaty i potwierdzenie odbioru. Przy ruchu mechaniki lub podnoszeniu wyznacz jedną osobę wydającą komendy. „Stop” powinien móc wydać każdy, kto widzi zagrożenie.</p><div class="mini-grid"><span><strong>Komenda</strong>jednoznaczna</span><span><strong>Potwierdzenie</strong>powtórzenie</span><span><strong>Wykonanie</strong>po zgodzie</span></div>`
      }
    ],
    checklist: ["Odprawa i role", "Strefa wygrodzona", "ŚOI dobrane", "Drogi wolne", "Awaryjne STOP znane"]
  },
  {
    id: "power",
    number: "02",
    icon: "⚡",
    title: "Zasilanie i obciążenie",
    intro: "Podstawy mocy, prądu, zabezpieczeń, rozdziału faz i bezpiecznej dystrybucji.",
    sections: [
      {
        title: "Moc i prąd",
        content: `<p>Dla ćwiczeniowego obciążenia jednofazowego rezystancyjnego używa się przybliżenia <strong>I = P / U</strong>. Przykład: 2300 W / 230 V ≈ 10 A. Rzeczywiste urządzenia LED i zasilacze mogą mieć współczynnik mocy oraz prąd rozruchowy, dlatego plan opiera się na tabliczkach znamionowych i dokumentacji.</p><div class="formula"><span>P = U × I</span><small>moc [W] = napięcie [V] × prąd [A]</small></div>`
      },
      {
        title: "Dystrybucja",
        content: `<ul><li>Rozpoznaj źródło, układ sieci, parametry rozdzielnicy i zabezpieczeń — nie zakładaj ich.</li><li>Bilansuj obciążenie między fazami według projektu i pomiarów.</li><li>Nie łącz obwodów „na próbę” i nie omijaj zabezpieczeń.</li><li>Oddzielaj energetykę od tras sygnałowych, zwłaszcza na długich równoległych odcinkach.</li><li>Połączenia muszą być chronione przed wodą, ruchem i naprężeniem; stopień IP dobiera się do środowiska.</li></ul>`
      },
      {
        title: "Kontrola przed podaniem napięcia",
        content: `<p>Sprawdź stan przewodów i złączy, ciągłość wymaganych połączeń ochronnych zgodnie z procedurą, zamknięcie rozdzielnic, zgodność napięcia oraz brak osób pracujących przy obwodzie. Załączanie wykonuje osoba wyznaczona i uprawniona.</p><div class="callout"><strong>Nigdy:</strong> nie używaj zabezpieczenia o większym prądzie tylko dlatego, że poprzednie zadziałało. Najpierw ustal przyczynę.</div>`
      }
    ],
    checklist: ["Moc policzona", "Fazy zbilansowane", "Przewody sprawdzone", "Złącza chronione", "Załącza osoba wyznaczona"]
  },
  {
    id: "fixtures",
    number: "03",
    icon: "◉",
    title: "Oprawy i optyka",
    intro: "Rozpoznawanie typów opraw, ich wiązki, parametrów i akcesoriów.",
    sections: [
      {
        title: "Typy opraw",
        content: `<div class="term-list"><p><strong>Profile / ellipsoidal</strong><span>Precyzyjna krawędź, noże, irys, gobo; dobre do wycinania obszaru.</span></p><p><strong>Fresnel</strong><span>Miękka krawędź i płynne przejście spot–flood; klasyczny wash.</span></p><p><strong>PAR</strong><span>Mocna, prosta wiązka; charakter zależy od źródła i optyki.</span></p><p><strong>Wash / spot / beam</strong><span>Ruchome oprawy różniące się szerokością, ostrością i zestawem efektów.</span></p><p><strong>Batten / pixel bar</strong><span>Liniowe oprawy do zalewania, tła lub efektów pikselowych.</span></p></div>`
      },
      {
        title: "Parametry wiązki",
        content: `<ul><li><strong>Zoom</strong> zmienia kąt wiązki; <strong>focus</strong> ostrość obrazu lub krawędzi.</li><li><strong>Iris</strong> zmniejsza średnicę wiązki, a <strong>frost</strong> ją zmiękcza.</li><li><strong>Gobo</strong> formuje wzór; obrót i indeksowanie to różne funkcje.</li><li><strong>Shutter/strobe</strong> odcina lub moduluje światło; nie mylić z nożami kadrującymi.</li><li><strong>Prism</strong> powiela wiązkę; animacja może poruszać teksturą.</li></ul>`
      },
      {
        title: "Tryb oprawy",
        content: `<p>Ta sama oprawa może mieć tryb podstawowy i rozszerzony. Tryb określa kolejność oraz liczbę kanałów — <strong>footprint</strong>. Zmiana trybu w oprawie bez zmiany w patchu powoduje przesunięcie parametrów i pozornie losowe zachowanie.</p><div class="callout"><strong>Praktyka:</strong> przed adresowaniem zapisz model, wersję firmware, tryb, footprint i orientację urządzenia.</div>`
      }
    ],
    checklist: ["Model zgodny", "Tryb zgodny", "Akcesoria zapięte", "Optyka czysta", "Ruch bez kolizji"]
  },
  {
    id: "light",
    number: "04",
    icon: "☀",
    title: "Światło, fotometria i kolor",
    intro: "Jednostki, kąt wiązki, temperatura barwowa i mieszanie kolorów.",
    sections: [
      {
        title: "Najważniejsze wielkości",
        content: `<div class="term-list"><p><strong>Lumen [lm]</strong><span>Strumień świetlny emitowany przez źródło.</span></p><p><strong>Kandela [cd]</strong><span>Światłość w określonym kierunku.</span></p><p><strong>Luks [lx]</strong><span>Natężenie oświetlenia na powierzchni: 1 lm/m².</span></p><p><strong>Kąt wiązki</strong><span>Zwykle obszar do 50% szczytowej intensywności; field angle bywa szerszy.</span></p></div>`
      },
      {
        title: "Odległość i pokrycie",
        content: `<p>W przybliżeniu natężenie na osi maleje z kwadratem odległości: dwa razy dalej oznacza około cztery razy mniej luksów, jeśli inne warunki się nie zmieniają. Średnicę wiązki można oszacować z kąta i odległości, ale finalny wybór potwierdza się danymi fotometrycznymi producenta.</p><div class="formula"><span>E ∝ 1 / d²</span><small>prawo odwrotności kwadratu</small></div>`
      },
      {
        title: "Kolor",
        content: `<ul><li><strong>RGB/RGBW/RGBA(L)</strong> — addytywne mieszanie źródeł LED.</li><li><strong>CMY</strong> — subtraktywne filtrowanie białego źródła w wielu oprawach ruchomych.</li><li><strong>CCT [K]</strong> opisuje wrażenie ciepłej lub chłodnej bieli; nie mówi samodzielnie o jakości oddania barw.</li><li><strong>CRI</strong> i <strong>TLCI</strong> pomagają oceniać odwzorowanie kolorów, szczególnie dla kamery.</li><li>Balans zielony–magenta (tint) jest niezależnym problemem od samej temperatury barwowej.</li></ul>`
      }
    ],
    checklist: ["Kąt dobrany", "Natężenie sprawdzone", "CCT zgodne", "Kamera uwzględniona", "Kolor zapisany w presetach"]
  },
  {
    id: "dmx",
    number: "05",
    icon: "512",
    title: "DMX512 i RDM",
    intro: "Adresowanie, topologia magistrali, terminacja, splittery i komunikacja zwrotna.",
    sections: [
      {
        title: "Uniwersum i adres",
        content: `<p>Jedno uniwersum DMX przenosi do <strong>512 slotów</strong>. Wartość 8-bitowa ma zakres 0–255. Parametr 16-bitowy zwykle korzysta z kanału coarse i fine. Adres startowy + footprint wyznaczają zajęty zakres.</p><div class="formula"><span>ostatni kanał = start + footprint − 1</span><small>np. start 101, footprint 20 → kanał 120</small></div>`
      },
      {
        title: "Warstwa fizyczna",
        content: `<ul><li>Standardowa magistrala biegnie liniowo urządzenie–urządzenie; rozgałęzienia wykonuje się aktywnym, najlepiej izolowanym splitterem.</li><li>Na końcu każdej gałęzi stosuje się terminację zgodną z DMX (typowo 120 Ω między liniami danych).</li><li>Używaj przewodu o impedancji przeznaczonej do transmisji DMX, nie przypadkowego kabla mikrofonowego.</li><li>Nie twórz pasywnych rozgałęzień typu Y.</li><li>Przy usterce sprawdzaj kolejno źródło, kabel, splitter, terminację, adres, tryb i patch.</li></ul>`
      },
      {
        title: "RDM",
        content: `<p>RDM (ANSI E1.20) dodaje komunikację dwukierunkową do łącza DMX: wykrywanie urządzeń, odczyt informacji, ustawianie adresu i raportowanie stanu. Cały tor — konsole, splittery i urządzenia — musi prawidłowo przenosić RDM.</p><div class="callout"><strong>Uwaga:</strong> nie wszystkie starsze urządzenia reagują dobrze na ruch RDM. Gdy pojawia się migotanie, porównaj zachowanie z RDM wyłączonym zgodnie z procedurą systemu.</div>`
      }
    ],
    checklist: ["Zakresy bez nakładania", "Kabel danych", "Brak Y-split", "Koniec terminowany", "RDM świadomie ustawione"]
  },
  {
    id: "network",
    number: "06",
    icon: "⌘",
    title: "Sieci sterujące",
    intro: "sACN, Art-Net, adresacja IP, switche, bramki i podstawy redundancji.",
    sections: [
      {
        title: "Protokoły",
        content: `<p><strong>sACN (ANSI E1.31)</strong> i <strong>Art-Net</strong> transportują dane sterujące po Ethernet/IP. Gateway/node zamienia dane sieciowe na fizyczne DMX. Numer uniwersum w konsolecie, sieci i bramce musi być spójny — nazewnictwo różnych systemów może zaczynać się od 0 lub 1.</p>`
      },
      {
        title: "Adresacja IP",
        content: `<ul><li>Urządzenia komunikujące się bez routingu muszą mieć zgodne adresy i maski podsieci.</li><li>Nie duplikuj adresów IP; prowadź tabelę urządzeń.</li><li>DHCP upraszcza konfigurację, ale system show powinien mieć przewidywalny plan adresacji.</li><li>Unicast kieruje strumień do konkretnego odbiorcy; multicast do grupy zainteresowanych odbiorców.</li><li>IGMP snooping może ograniczać niepotrzebny multicast na portach switcha, jeśli sieć jest poprawnie zaprojektowana.</li></ul>`
      },
      {
        title: "Dobra praktyka show",
        content: `<p>Oddziel sieć sterującą od przypadkowego ruchu biurowego, dokumentuj porty i VLAN-y, wyłącz niepotrzebne Wi‑Fi, zachowaj konfiguracje switchy i bramek. Redundancja działa tylko wtedy, gdy była rzeczywiście przetestowana z utratą elementu.</p><div class="callout"><strong>Diagnoza:</strong> warstwa fizyczna → link → IP/maska → ping/status → mapowanie uniwersów → merge/priority → wyjście gatewaya.</div>`
      }
    ],
    checklist: ["Plan IP", "Brak duplikatów", "Uniwersa zgodne", "Porty opisane", "Backup przetestowany"]
  },
  {
    id: "console",
    number: "07",
    icon: "▶",
    title: "Patch i programowanie",
    intro: "Od fixture type i patchu do grup, presetów, cue, tracking i playbacków.",
    sections: [
      {
        title: "Patch",
        content: `<p>Patch mapuje logiczny fixture ID na konkretny typ, tryb, uniwersum i adres. Przed wyjściem sygnału sprawdź brak nakładania zakresów oraz zgodność z rzeczywistą konfiguracją urządzeń. Nazwy powinny odzwierciedlać pozycję i funkcję, np. <strong>FOH L Profile 1</strong>.</p>`
      },
      {
        title: "Warstwa programowania",
        content: `<div class="term-list"><p><strong>Group</strong><span>Wybór logicznego zestawu urządzeń.</span></p><p><strong>Preset / palette</strong><span>Współdzielona wartość koloru, pozycji, beam lub intensywności.</span></p><p><strong>Programmer</strong><span>Tymczasowy obszar zmian o zwykle wysokim priorytecie.</span></p><p><strong>Cue</strong><span>Zapisany stan lub zmiana w sekwencji.</span></p><p><strong>Playback</strong><span>Fader/przycisk uruchamiający sekwencję, efekt lub funkcję.</span></p></div>`
      },
      {
        title: "Tracking i czasy",
        content: `<p>W konsolecie trackingowej wartość pozostaje aktywna, dopóki nie zostanie zmieniona lub zablokowana. <strong>Fade</strong> opisuje czas przejścia, a <strong>delay</strong> opóźnienie startu. Przed show wyczyść programmer, sprawdź priorytety, grand master, blackout, inhibitory i testowe wartości DMX.</p><div class="callout"><strong>Backup:</strong> zapisuj wersje showfile przed większymi zmianami i eksportuj kopię poza konsoletę.</div>`
      }
    ],
    checklist: ["Patch zgodny", "Grupy logiczne", "Presety użyte", "Tracking sprawdzony", "Showfile zbackupowany"]
  },
  {
    id: "rigging",
    number: "08",
    icon: "▲",
    title: "Rigging i praca na wysokości",
    intro: "Granice kompetencji, WLL, mocowanie opraw, linki bezpieczeństwa i strefy pracy.",
    sections: [
      {
        title: "Tylko w granicach kwalifikacji",
        content: `<p>Projekt punktów, kratownic, wciągarek i systemu zabezpieczenia przed upadkiem należy do odpowiednio kompetentnych osób. Pracownik światła nie zmienia samodzielnie punktów ani konfiguracji konstrukcji tylko dlatego, że „zawsze tak robiono”.</p><div class="callout danger"><strong>Nigdy:</strong> nie stój pod przemieszczanym ładunkiem i nie używaj elementu bez czytelnej identyfikacji, kontroli oraz dopuszczenia do danego zastosowania.</div>`
      },
      {
        title: "Mocowanie oprawy",
        content: `<ul><li>Użyj właściwego, sprawnego uchwytu i elementów zgodnych z dokumentacją oprawy.</li><li>Zachowaj dopuszczalne obciążenie robocze (WLL) każdego elementu i uwzględnij cały tor obciążenia.</li><li>Zastosuj niezależne zabezpieczenie wtórne, prowadzone tak, by ograniczyć drogę upadku i nie uszkodzić urządzenia.</li><li>Zabezpiecz akcesoria: ramki filtrów, barndoory i elementy wymienne.</li><li>Sprawdź zakres pan/tilt i kolizje przed ruchem urządzenia.</li></ul>`
      },
      {
        title: "Praca na wysokości",
        content: `<p>Wymaga organizacji jako praca szczególnie niebezpieczna: nadzoru, zabezpieczeń, instruktażu i wyznaczonej strefy. Dobór szelek, lonży, urządzeń samohamownych i punktów kotwiczenia należy do kompetentnej osoby; konieczny jest plan ratunkowy, nie tylko sprzęt.</p>`
      }
    ],
    checklist: ["WLL zweryfikowane", "Uchwyt sprawny", "Safety niezależne", "Akcesoria zabezpieczone", "Strefa pod spodem pusta"]
  },
  {
    id: "workflow",
    number: "09",
    icon: "✓",
    title: "Workflow realizacji",
    intro: "Kolejność od advance i load-in przez focus oraz programowanie do show i strike.",
    sections: [
      {
        title: "Przed przyjazdem",
        content: `<ul><li>Przeanalizuj rider, plan riggingu, patch, zapotrzebowanie mocy i listę urządzeń.</li><li>Ustal format numeracji uniwersów, fixture IDs, pozycje i nazwy.</li><li>Przygotuj showfile, profile opraw, plan sieci oraz backup.</li><li>Sprawdź masy, moce, akcesoria, firmware i kompatybilność.</li><li>Ustal harmonogram z audio, wideo, sceną i riggingiem.</li></ul>`
      },
      {
        title: "Load-in do próby",
        content: `<div class="timeline"><span><b>1</b>Odprawa</span><span><b>2</b>Rigging</span><span><b>3</b>Zasilanie</span><span><b>4</b>Dane</span><span><b>5</b>Adresy</span><span><b>6</b>Test</span><span><b>7</b>Focus</span><span><b>8</b>Program</span></div><p>Przy odbiorze wykonaj lamp check parametr po parametrze, a nie tylko „świeci/nie świeci”. Potwierdź kolory, pozycje, zoom, focus, gobo, frost, prism, shutter i ruch.</p>`
      },
      {
        title: "Show i strike",
        content: `<p>Przed otwarciem drzwi: zapisz showfile, sprawdź backup, komunikację, awaryjne looki i stan baterii urządzeń. Po show wyłączaj oraz demontuj w uzgodnionej kolejności; gorące oprawy studź, kable zwijaj bez uszkodzeń, a usterki oznaczaj i raportuj zamiast chować do case’a.</p>`
      }
    ],
    checklist: ["Advance zamknięty", "Lamp check pełny", "Focus potwierdzony", "Backup online", "Usterki oznaczone"]
  },
  {
    id: "troubleshooting",
    number: "10",
    icon: "◆",
    title: "Diagnostyka i konserwacja",
    intro: "Systematyczne szukanie usterek od objawu do przyczyny i dobre praktyki serwisowe.",
    sections: [
      {
        title: "Model warstwowy",
        content: `<div class="timeline"><span><b>1</b>Zasilanie</span><span><b>2</b>Urządzenie</span><span><b>3</b>Dane</span><span><b>4</b>Adres/tryb</span><span><b>5</b>Patch</span><span><b>6</b>Program</span><span><b>7</b>Playback</span></div><p>Zacznij od objawu i jednej hipotezy naraz. Zmiana pięciu elementów jednocześnie może ukryć przyczynę.</p>`
      },
      {
        title: "Metody izolacji",
        content: `<ul><li><strong>Half-split:</strong> podziel tor sygnałowy na pół i ustal, w której części leży błąd.</li><li><strong>Known-good:</strong> zamień jeden element na pewny przewód, port lub urządzenie.</li><li><strong>Lokalny test:</strong> sprawdź funkcję urządzenia z panelu, jeśli dokumentacja na to pozwala.</li><li><strong>DMX view:</strong> zobacz faktyczną wartość wyjściową, a nie tylko wygląd fadera.</li><li><strong>Log:</strong> zapisz czas, objaw, konfigurację i skuteczne rozwiązanie.</li></ul>`
      },
      {
        title: "Konserwacja",
        content: `<p>Czyść optykę i filtry zgodnie z instrukcją, kontroluj wentylatory, przewody, złącza, uchwyty i elementy zabezpieczające. Aktualizacje firmware wykonuj planowo, na stabilnym zasilaniu, po kopii konfiguracji i z czasem na test — nie tuż przed show.</p><div class="callout"><strong>Oznacz usterkę:</strong> urządzenie niepewne nie wraca do puli sprawnego sprzętu bez jednoznacznej informacji i kontroli.</div>`
      }
    ],
    checklist: ["Objaw zapisany", "Jedna zmiana naraz", "Known-good użyty", "Przyczyna potwierdzona", "Usterka zaraportowana"]
  }
];

const examQuestions = [
  {category:"BHP",text:"Kto powinien mieć prawo natychmiast zatrzymać pracę, gdy zauważy zagrożenie?",answers:["Tylko kierownik produkcji","Każda osoba, która zauważy zagrożenie","Wyłącznie elektryk","Tylko operator konsolety"],correct:1,explanation:"Bezpieczeństwo wymaga szybkiej reakcji. Każdy powinien móc wydać komunikat STOP, a dalszą pracę wznawia się po wyjaśnieniu zagrożenia."},
  {category:"BHP",text:"Co należy zrobić przed ruchem mechaniki lub podnoszeniem elementu?",answers:["Włączyć pełne światło sceny","Wyznaczyć jedną osobę wydającą komendy i oczyścić strefę","Wyłączyć komunikację interkomową","Stanąć pod ładunkiem, aby kontrolować jego tor"],correct:1,explanation:"Jedno źródło komend i pusta, kontrolowana strefa zmniejszają ryzyko nieporozumienia oraz uderzenia."},
  {category:"BHP",text:"Droga ewakuacyjna podczas montażu powinna być:",answers:["Wykorzystywana do składowania pustych case’ów","Otwarta tylko podczas show","Wolna, dostępna i czytelnie oznaczona","Zastawiona przewodami, jeśli są przykryte taśmą"],correct:2,explanation:"Drogi ewakuacyjne muszą pozostać dostępne także podczas load-in i strike."},
  {category:"BHP",text:"Praca na wysokości wymaga przede wszystkim:",answers:["Tylko wygodnych butów","Nadzoru, zabezpieczeń, instruktażu i oceny ryzyka","Wyłącznie zgody kolegi","Szybkiego wykonania zadania"],correct:1,explanation:"PIP zalicza pracę na wysokości do prac szczególnie niebezpiecznych wymagających właściwej organizacji."},

  {category:"Zasilanie",text:"Obciążenie 2300 W przy 230 V pobiera w prostym przybliżeniu:",answers:["1 A","5 A","10 A","23 A"],correct:2,explanation:"I = P/U, więc 2300 W / 230 V = 10 A. Dla realnych urządzeń trzeba uwzględnić dane producenta i charakter obciążenia."},
  {category:"Zasilanie",text:"Co zrobić, gdy zabezpieczenie obwodu zadziałało?",answers:["Założyć większe bez analizy","Włączyć ponownie dowolną liczbę razy","Ustalić przyczynę i postępować zgodnie z procedurą","Zewrzeć zabezpieczenie"],correct:2,explanation:"Zadziałanie zabezpieczenia może sygnalizować przeciążenie lub uszkodzenie. Nie wolno go obchodzić."},
  {category:"Zasilanie",text:"Dlaczego obciążenie rozdziela się świadomie między fazami?",answers:["Aby zmienić kolor światła","Aby ograniczyć nierównowagę i nie przeciążać części systemu","Aby zwiększyć liczbę kanałów DMX","Aby RDM działał szybciej"],correct:1,explanation:"Bilans faz jest elementem bezpiecznego planowania dystrybucji mocy."},
  {category:"Zasilanie",text:"Stopień IP urządzenia informuje o:",answers:["Liczbie kanałów DMX","Ochronie obudowy przed dostępem, ciałami stałymi i wodą","Temperaturze barwowej","Maksymalnym kącie pan"],correct:1,explanation:"Kod IP pomaga dobrać sprzęt do warunków środowiskowych; szczegóły interpretuje się zgodnie z właściwą normą i dokumentacją."},

  {category:"Oprawy",text:"Która oprawa jest typowo najlepsza do precyzyjnego wykadrowania obszaru nożami?",answers:["Profile","Fresnel","Blinder","Pixel bar"],correct:0,explanation:"Oprawa profilowa zapewnia ostrą projekcję i noże kadrujące."},
  {category:"Oprawy",text:"Frost w oprawie służy do:",answers:["Zwiększenia liczby kanałów","Zmiękczenia i rozproszenia wiązki","Ustawienia adresu IP","Zabezpieczenia przed upadkiem"],correct:1,explanation:"Filtr frost rozprasza światło i zmiękcza krawędzie wiązki."},
  {category:"Oprawy",text:"Co określa footprint oprawy?",answers:["Masę z case’em","Liczbę zajmowanych slotów DMX w danym trybie","Maksymalną długość safety","Kąt nachylenia kratownicy"],correct:1,explanation:"Footprint to liczba kanałów/slotów DMX używanych przez wybrany tryb."},
  {category:"Oprawy",text:"Oprawa działa losowo po zmianie trybu z 16 na 24 kanały. Najbardziej prawdopodobne jest, że:",answers:["CCT jest za wysokie","Patch lub adresy nie zostały dopasowane do nowego footprintu","Brakuje linki safety","Zmieniono fazę zasilania"],correct:1,explanation:"Niezgodność trybu między oprawą i konsoletą przesuwa mapowanie parametrów."},

  {category:"Światło",text:"Luks jest jednostką:",answers:["Strumienia świetlnego","Natężenia oświetlenia na powierzchni","Temperatury barwowej","Mocy elektrycznej"],correct:1,explanation:"1 lx = 1 lumen na metr kwadratowy."},
  {category:"Światło",text:"Jeśli odległość od punktowego źródła zwiększymy dwukrotnie, natężenie na osi w przybliżeniu:",answers:["Wzrośnie dwukrotnie","Spadnie o połowę","Spadnie do około jednej czwartej","Nie zmieni się"],correct:2,explanation:"Z prawa odwrotności kwadratu E ∝ 1/d²."},
  {category:"Kolor",text:"Który zapis opisuje addytywne mieszanie światła?",answers:["RGB","CMY na filtrach","WLL","RCD"],correct:0,explanation:"RGB miesza emisję czerwonego, zielonego i niebieskiego światła."},
  {category:"Kolor",text:"Temperatura barwowa CCT mówi przede wszystkim o:",answers:["Wrażeniu ciepła lub chłodu bieli","Maksymalnej mocy urządzenia","Jakości wszystkich kolorów niezależnie od widma","Liczbie diod"],correct:0,explanation:"CCT opisuje chromatyczność bieli na osi ciepła–chłodu; jakość odwzorowania barw wymaga dodatkowych metryk."},

  {category:"DMX",text:"Ile slotów zawiera standardowe uniwersum DMX512?",answers:["255","256","512","1024"],correct:2,explanation:"Jedno uniwersum DMX512 przenosi maksymalnie 512 slotów danych."},
  {category:"DMX",text:"Oprawa ma adres startowy 101 i footprint 20. Jaki jest jej ostatni kanał?",answers:["120","121","119","100"],correct:0,explanation:"101 + 20 − 1 = 120."},
  {category:"DMX",text:"Wartość jednego kanału 8-bitowego mieści się w zakresie:",answers:["0–100","1–512","0–255","0–65535"],correct:2,explanation:"8 bitów daje 256 możliwych wartości: od 0 do 255."},
  {category:"DMX",text:"Jak prawidłowo utworzyć kilka niezależnych gałęzi DMX?",answers:["Pasywnym kablem Y","Aktywnym, najlepiej izolowanym splitterem","Rozcinając ekran przewodu","Łącząc wyjścia dwóch konsolet"],correct:1,explanation:"Splitter buforuje i rozdziela sygnał, często także izoluje galwanicznie gałęzie."},
  {category:"DMX",text:"Gdzie umieszcza się terminator DMX?",answers:["Na początku przy konsolecie","Na końcu każdej fizycznej gałęzi","W każdym urządzeniu jednocześnie","Wyłącznie w splitterze"],correct:1,explanation:"Terminacja zamyka linię transmisyjną na końcu gałęzi i ogranicza odbicia sygnału."},
  {category:"RDM",text:"RDM umożliwia między innymi:",answers:["Zasilanie opraw przez kabel DMX","Dwukierunkowe wykrywanie i konfigurację urządzeń","Zwiększenie napięcia sieciowego","Podnoszenie kratownicy"],correct:1,explanation:"RDM rozszerza DMX o komunikację zwrotną i zarządzanie urządzeniami."},

  {category:"Sieć",text:"Rolą gatewaya sACN/DMX jest:",answers:["Zmiana danych sieciowych na fizyczne wyjście DMX i odwrotnie, zależnie od urządzenia","Zwiększanie mocy opraw","Pomiar WLL","Sterowanie wciągarką bez kontrolera"],correct:0,explanation:"Gateway łączy świat protokołu sieciowego z portami DMX."},
  {category:"Sieć",text:"Dwa urządzenia mają ten sam adres IP. Typowym skutkiem będzie:",answers:["Lepsza redundancja","Konflikt i niestabilna lub brak komunikacji","Więcej uniwersów","Automatyczne połączenie w grupę"],correct:1,explanation:"Adres IP powinien jednoznacznie identyfikować interfejs w danej sieci."},
  {category:"Sieć",text:"Multicast w sACN kieruje dane:",answers:["Zawsze tylko do jednego IP","Do grupy odbiorców zainteresowanych danym strumieniem","Wyłącznie przez Wi‑Fi","Bez numeru uniwersum"],correct:1,explanation:"Multicast korzysta z adresu grupowego; właściwa konfiguracja switchy pomaga kontrolować dystrybucję ruchu."},
  {category:"Sieć",text:"Co sprawdzić najpierw, gdy node nie pojawia się w sieci?",answers:["Kolor gobo","Fizyczny link, adres IP i maskę","Linkę safety","Czas fade cue"],correct:1,explanation:"Diagnostykę sieci zaczyna się od warstwy fizycznej i podstaw adresacji."},

  {category:"Konsoleta",text:"Patch łączy fixture ID z:",answers:["Wyłącznie kolorem obudowy","Typem/trybem oprawy oraz uniwersum i adresem","Miejscem w magazynie","Numerem zabezpieczenia nadprądowego"],correct:1,explanation:"Patch mapuje obiekt logiczny konsolety na rzeczywiste kanały sterujące."},
  {category:"Konsoleta",text:"Do czego najlepiej służy preset/palette?",answers:["Do fizycznego terminowania DMX","Do współdzielenia wartości, np. pozycji lub koloru, przez wiele cue","Do podnoszenia opraw","Do pomiaru prądu"],correct:1,explanation:"Presety ułatwiają spójne programowanie i późniejszą korektę współdzielonych wartości."},
  {category:"Konsoleta",text:"W systemie trackingowym wartość parametru zazwyczaj:",answers:["Znika po każdym cue","Pozostaje aktywna do kolejnej zmiany lub blokady","Jest zawsze zerowana przez fade","Nie może być zapisana"],correct:1,explanation:"Tracking przenosi niezmienione wartości przez kolejne cue."},
  {category:"Konsoleta",text:"Programmer pozostawiony z aktywnymi wartościami może:",answers:["Nadpisywać wygląd odtwarzany z playbacku","Naprawić uszkodzony przewód","Zwiększyć WLL uchwytu","Terminować linię DMX"],correct:0,explanation:"Programmer zwykle ma wysoki priorytet i może blokować oczekiwane wartości z sekwencji."},

  {category:"Rigging",text:"WLL oznacza:",answers:["Długość kabla sieciowego","Dopuszczalne obciążenie robocze elementu","Temperaturę soczewki","Numer uniwersum"],correct:1,explanation:"Working Load Limit to maksymalne dopuszczalne obciążenie robocze określone dla elementu i warunków użycia."},
  {category:"Rigging",text:"Linka bezpieczeństwa oprawy powinna być:",answers:["Poprowadzona jako niezależne zabezpieczenie wtórne zgodnie z dokumentacją","Przypięta do przewodu zasilającego","Dowolnie długa, aby oprawa mogła spaść","Używana zamiast głównego uchwytu"],correct:0,explanation:"Safety nie zastępuje uchwytu głównego; ogranicza skutki jego awarii."},
  {category:"Rigging",text:"Czy pracownik światła może samodzielnie zmienić punkt riggingowy bez uzgodnienia?",answers:["Tak, jeśli oprawa jest lekka","Tak, jeśli wcześniej tak robiono","Nie — decyzja należy do kompetentnych, uprawnionych osób i projektu","Tak, po zakończeniu próby"],correct:2,explanation:"Zmiana toru obciążenia wymaga właściwych kompetencji i zatwierdzenia."},
  {category:"Rigging",text:"Kiedy można przebywać pod przemieszczanym ładunkiem?",answers:["Gdy ma się kask","Gdy trwa próba","Nie należy przebywać pod przemieszczanym ładunkiem","Gdy operator widzi pracownika"],correct:2,explanation:"Strefa pod ładunkiem powinna być oczyszczona i kontrolowana."},

  {category:"Workflow",text:"Najlepszy moment na sprawdzenie profili opraw i przygotowanie patchu to:",answers:["Dopiero po otwarciu drzwi","Etap advance i przygotowania showfile","Po demontażu","W trakcie pierwszego cue"],correct:1,explanation:"Dobre przygotowanie przed load-in ogranicza błędy i oszczędza czas na miejscu."},
  {category:"Workflow",text:"Pełny lamp check powinien obejmować:",answers:["Tylko intensity 100%","Parametry intensywności, koloru, pozycji, beam, shutter i ruchu odpowiednie dla oprawy","Wyłącznie kontrolę wentylatora","Tylko numer urządzenia"],correct:1,explanation:"Sprawdzenie wszystkich parametrów ujawnia błędy trybu, patchu, mechaniki i akcesoriów."},
  {category:"Workflow",text:"Uszkodzone urządzenie po strike należy:",answers:["Schować bez informacji","Oznaczyć, odseparować i zaraportować zgodnie z procedurą","Włączyć do kolejnego show bez testu","Naprawiać pod napięciem"],correct:1,explanation:"Jednoznaczne oznaczenie chroni kolejny zespół przed użyciem sprzętu niepewnego."},

  {category:"Diagnostyka",text:"Najbardziej systematyczna kolejność diagnozy braku reakcji oprawy to:",answers:["Gobo → kolor → obudowa","Zasilanie → urządzenie → dane → adres/tryb → patch → program","Program → wymiana całej sieci → zasilanie","Losowa wymiana elementów"],correct:1,explanation:"Przejście warstwami od podstaw ogranicza liczbę hipotez."},
  {category:"Diagnostyka",text:"Metoda half-split polega na:",answers:["Zmniejszeniu wartości DMX o połowę","Dzieleniu toru na części, aby szybko zawęzić miejsce usterki","Zasileniu dwóch faz jednym przewodem","Podzieleniu WLL przez dwa bez dokumentacji"],correct:1,explanation:"Po odłączeniu połowy toru obserwuje się, w której części nadal występuje objaw."},
  {category:"Diagnostyka",text:"Co oznacza test z elementem known-good?",answers:["Użycie sprawnego, wcześniej potwierdzonego kabla lub urządzenia w miejsce podejrzanego","Reset całego showfile","Podniesienie priorytetu sACN","Losową zmianę adresu"],correct:0,explanation:"Pewny element pomaga rozstrzygnąć, czy podejrzana część toru jest przyczyną."}
];
