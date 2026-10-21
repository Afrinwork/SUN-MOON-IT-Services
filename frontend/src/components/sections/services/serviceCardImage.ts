/** Zeichnet eine Leistungskarte (weiß, schwarze Icon-Kachel, Titel, Text) als Bild für die Galerie. */

const WIDTH = 780;
const HEIGHT = 1000;
const PAD = 64;

type CardInput = { title: string; text: string; icon: SVGSVGElement; fontFamily: string };

function loadIcon(icon: SVGSVGElement): Promise<HTMLImageElement> {
  const svg = icon.cloneNode(true) as SVGSVGElement;
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "64");
  svg.setAttribute("height", "64");
  svg.setAttribute("stroke", "#ffffff");
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}`;
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  if (lines.length <= maxLines) return lines;
  const cut = lines.slice(0, maxLines);
  cut[maxLines - 1] = `${cut[maxLines - 1].replace(/\s+\S*$/, "")} …`;
  return cut;
}

export async function drawServiceCard({ title, text, icon, fontFamily }: CardInput): Promise<string> {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = "#0a0a0a";
  ctx.beginPath();
  ctx.roundRect(PAD, PAD, 128, 128, 32);
  ctx.fill();
  ctx.drawImage(await loadIcon(icon), PAD + 32, PAD + 32, 64, 64);

  ctx.fillStyle = "#0a0a0a";
  ctx.font = `700 56px ${fontFamily}`;
  ctx.fillText(title, PAD, 330);

  ctx.fillStyle = "#5c5c5c";
  ctx.font = `400 36px ${fontFamily}`;
  wrapLines(ctx, text, WIDTH - PAD * 2, 7).forEach((line, index) => ctx.fillText(line, PAD, 420 + index * 56));

  ctx.fillStyle = "#0a0a0a";
  ctx.font = `700 34px ${fontFamily}`;
  ctx.fillText("Mehr erfahren  ↗", PAD, HEIGHT - PAD);

  return canvas.toDataURL("image/png");
}
