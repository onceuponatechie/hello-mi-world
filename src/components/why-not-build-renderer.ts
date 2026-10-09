/** The original Why Not Build composition, drawn in 360 x 486 coordinates. */
type Screen = {
    category: string;
    mode: 'abstract' | 'sage' | 'blur' | 'detail';
    metric?: string;
    title: readonly string[];
    body: readonly string[];
    media?: boolean;
};
export const SLIDES: readonly Screen[] = [
    { category: 'Careers', mode: 'abstract', metric: '06', title: ['Six territories. One instinct.'], body: ['Understand what’s changing.', 'Build what comes next.'], media: true },
    { category: 'Businesses', mode: 'sage', title: ['Make room for a better way.'], body: ['Small experiments. Real possibilities.', 'Build a business on your own terms.'] },
    { category: 'Products', mode: 'abstract', metric: '01', title: ['Start with a better question.'], body: ['What could work differently?', 'Make something worth finding out.'], media: true },
    { category: 'Systems', mode: 'blur', title: ['Change how the pieces connect.'], body: ['Look beneath the familiar.', 'Build systems that make more possible.'] },
    { category: 'Ideas', mode: 'abstract', metric: 'What if?', title: ['Curiosity is a place to begin.'], body: ['Question the default. Test an idea.', 'Keep the part that changes something.'], media: true },
    { category: 'A better you', mode: 'detail', title: ['You are a work in possibility.'], body: ['Learn. Make. Become.', 'Why not build something different?'] }
];
const W = 360, H = 486;
export const DURATION = 3800, TOTAL = DURATION * 6;
const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));
const ease = (x: number) => {
    x = clamp(x);
    return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};
const out = (x: number) => 1 - Math.pow(1 - clamp(x), 3);
function round(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    c.beginPath();
    c.roundRect(x, y, w, h, r);
}
function capsule(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
    c.beginPath();
    c.moveTo(x + w * .27, y + 2);
    c.bezierCurveTo(x + w * .53, y - 2, x + w * .78, y + 1, x + w * .86, y + 5);
    c.bezierCurveTo(x + w * 1.08, y + 14, x + w * 1.02, y + h * .69, x + w * .8, y + h * .85);
    c.bezierCurveTo(x + w * .59, y + h * .95, x + w * .35, y + h + 4, x + w * .18, y + h - 1);
    c.bezierCurveTo(x - w * .02, y + h - 2, x - w * .04, y + 11, x + w * .11, y + 5);
    c.closePath();
}
function imageCover(c: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number, scale = 1, ox = .5, oy = .5) {
    if (!img?.complete || !img.naturalWidth)
        return;
    const f = Math.max(w / img.width, h / img.height) * scale, iw = img.width * f, ih = img.height * f;
    c.drawImage(img, x + (w - iw) * ox, y + (h - ih) * oy, iw, ih);
}
function arrow(c: CanvasRenderingContext2D, x: number, y: number, size = 9, alpha = .5) {
    c.save();
    c.globalAlpha *= alpha;
    c.strokeStyle = '#f2f5e9';
    c.lineWidth = 1.2;
    c.beginPath();
    c.moveTo(x, y + size);
    c.lineTo(x + size, y);
    c.moveTo(x + 1, y);
    c.lineTo(x + size, y);
    c.lineTo(x + size, y + size - 1);
    c.stroke();
    c.restore();
}
function abstract(c: CanvasRenderingContext2D, t: number, variant: number) {
    c.fillStyle = '#20251D';
    c.fillRect(0, 0, W, H);
    const phase = t / 1000;
    const x = 66 + Math.sin(phase * .52 + variant) * 50, y = 34 + Math.cos(phase * .43) * 23;
    const g = c.createRadialGradient(x, y, 4, x + 34, y + 25, 300);
    g.addColorStop(0, '#afc996');
    g.addColorStop(.16, '#789565');
    g.addColorStop(.42, '#3a5234');
    g.addColorStop(.72, '#20271c');
    g.addColorStop(1, '#20251D');
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
    c.save();
    c.filter = 'blur(22px)';
    c.globalAlpha = .37;
    c.translate(120 + Math.sin(phase * .37) * 38, 38 + Math.cos(phase * .35) * 14);
    c.rotate(-.28 + Math.sin(phase * .3) * .24);
    for (let j = 0; j < 3; j++) {
        c.strokeStyle = j === 0 ? '#d6ebbd' : j === 1 ? '#a7c496' : '#536b47';
        c.lineWidth = 22 + j * 10;
        c.beginPath();
        c.moveTo(-195, 70 + j * 16);
        c.bezierCurveTo(-90, -118, 70, 134, 262, -20 + j * 20);
        c.stroke();
    }
    c.restore();
    const fade = c.createLinearGradient(0, 70, 0, H);
    fade.addColorStop(0, '#11120f00');
    fade.addColorStop(.6, '#20251Dce');
    fade.addColorStop(1, '#20251D');
    c.fillStyle = fade;
    c.fillRect(0, 0, W, H);
}
export class WhyNotBuildRenderer {
    constructor(private readonly ctx: CanvasRenderingContext2D, private readonly canvas: HTMLCanvasElement, private readonly images: {
        sage: HTMLImageElement;
        ribbon: HTMLImageElement;
    }, private readonly fonts: { heading: string; body: string }) { }
    private text(c: CanvasRenderingContext2D, str: string, x: number, y: number, size: number, color: string, heading = false) {
        c.fillStyle = color;
        c.font = `${heading ? 500 : 400} ${size}px ${heading ? this.fonts.heading : this.fonts.body}`;
        c.fillText(str, x, y);
    }
    draw(t: number, ctx = this.ctx, width = this.canvas.width, height = this.canvas.height) {
        const c = ctx;
        c.save();
        c.setTransform(width / W, 0, 0, height / H, 0, 0);
        c.clearRect(0, 0, W, H);
        round(c, 0, 0, W, H, 27);
        c.clip();
        const idx = Math.floor(t / DURATION) % 6, local = t % DURATION;
        const trans = ease((local - 3030) / 770);
        this.drawSlide(c, idx, local, -W * trans, t, false);
        if (trans > 0)
            this.drawSlide(c, (idx + 1) % 6, 0, W * (1 - trans), t, true);
        c.fillStyle = '#ffffff03';
        c.fillRect(0, 0, W, H);
        for (let i = 0; i < 6; i++) {
            const bx = 40 + i * 47;
            c.fillStyle = 'rgba(243,245,234,.20)';
            round(c, bx, 452, 38, 2, 1);
            c.fill();
            if (i === idx) {
                c.fillStyle = '#e7efd9';
                round(c, bx, 452, Math.max(2, 38 * clamp(local / DURATION)), 2, 1);
                c.fill();
            }
        }
        c.restore();
    }
    drawSlide(c: CanvasRenderingContext2D, idx: number, local: number, offset: number, t: number, incoming: boolean) {
        const s = SLIDES[idx];
        c.save();
        c.translate(offset, 0);
        c.beginPath();
        c.rect(0, 0, W, H);
        c.clip();
        if (s.mode === 'abstract')
            abstract(c, t, idx);
        else {
            c.fillStyle = '#20251D';
            c.fillRect(0, 0, W, H);
            const im = s.mode === 'blur' ? this.images.ribbon : this.images.sage;
            c.save();
            const blur = s.mode === 'blur' ? 3.8 + 1.2 * Math.sin(t / 2200) : s.mode === 'detail' ? 1.1 : 0;
            c.filter = `blur(${blur}px)`;
            imageCover(c, im, -8, -8, W + 16, H + 16, 1.08 + local / 100000, s.mode === 'detail' ? .76 : .5, s.mode === 'detail' ? .35 : .5);
            c.restore();
            c.globalCompositeOperation = 'color';
            c.fillStyle = s.mode === 'sage' ? '#bcd7a4' : s.mode === 'blur' ? '#929f86' : '#aabd94';
            c.globalAlpha = s.mode === 'sage' ? .66 : .25;
            c.fillRect(0, 0, W, H);
            c.globalAlpha = 1;
            c.globalCompositeOperation = 'source-over';
            if (s.mode === 'sage') {
                c.fillStyle = '#b2d29530';
                c.fillRect(0, 0, W, H);
            }
            const gradient = c.createLinearGradient(0, 0, 0, H);
            gradient.addColorStop(0, '#0a120d46');
            gradient.addColorStop(.35, '#0b100c05');
            gradient.addColorStop(.64, '#0e120d30');
            gradient.addColorStop(1, '#101410ed');
            c.fillStyle = gradient;
            c.fillRect(0, 0, W, H);
        }
        // Text leaves 240 ms before the screen. Entering text trails the image.
        const leave = ease((local - 2780) / 640), enter = incoming ? 0 : out(local / 650);
        const tx = incoming ? 30 : (1 - enter) * 30 - leave * 135, alpha = incoming ? .0 : clamp(enter * (1 - leave));
        c.save();
        c.translate(tx * .42, 0);
        c.globalAlpha = incoming ? .5 : Math.max(.0, 1 - leave);
        this.header(c, s);
        c.restore();
        c.save();
        c.translate(tx, 0);
        c.globalAlpha = alpha;
        const isBlack = s.mode === 'abstract';
        if (isBlack) {
            let metric = s.metric ?? '';
            if (idx === 0)
                metric = String(Math.round(6 * out((local - 160) / 1420))).padStart(2, '0');
            if (idx === 2)
                metric = String(Math.round(out((local - 160) / 1200))).padStart(2, '0');
            this.text(c, metric, 30, 184, idx === 4 ? 49 : 68, '#FFFFFF', true);
            if (idx !== 4)
                arrow(c, idx === 0 ? 121 : 119, 134, 12, .6);
            else {
                c.fillStyle = '#d7cde3';
                c.beginPath();
                c.arc(222, 171, 3.2, 0, Math.PI * 2);
                c.fill();
            }
            s.title.forEach((line, i) => this.text(c, line, 30, 268 + i * 16, 12.8, '#FFFFFF', true));
            s.body.forEach((line, i) => this.text(c, line, 30, 285 + i * 16, 12.2, '#BEC5B7'));
            if (s.media) {
                const mediaEnter = out((local - 250) / 700);
                c.save();
                c.translate(0, (1 - mediaEnter) * 9);
                c.globalAlpha *= mediaEnter;
                this.smallMedia(c, this.images.sage, 30, 334, 95, 47, 0, t);
                this.smallMedia(c, this.images.ribbon, 137, 334, 95, 47, 1, t);
                c.restore();
            }
        }
        else {
            s.title.forEach((line, i) => this.text(c, line, 30, 377 + i * 17, 12.6, '#FFFFFF', true));
            s.body.forEach((line, i) => this.text(c, line, 30, 395 + i * 16, 12, '#BEC5B7'));
        }
        c.restore();
        c.restore();
    }
    header(c: CanvasRenderingContext2D, s: Screen) {
        c.fillStyle = '#edf5d231';
        c.strokeStyle = '#eff8dd33';
        c.lineWidth = .8;
        c.beginPath();
        c.arc(29, 30, 13.5, 0, Math.PI * 2);
        c.fill();
        c.stroke();
        c.save();
        c.translate(29, 30);
        c.strokeStyle = '#eff8dd';
        c.lineWidth = 1.2;
        for (let i = 0; i < 4; i++) {
            c.rotate(Math.PI / 2);
            c.beginPath();
            c.moveTo(0, -6);
            c.lineTo(0, -2);
            c.moveTo(3, -4);
            c.lineTo(1, -2);
            c.stroke();
        }
        c.restore();
        this.text(c, 'Why Not Build', 49, 33, 10.5, '#FFFFFF', true);
        c.font = `400 9.5px ${this.fonts.body}`;
        const pw = c.measureText(s.category).width + 26;
        round(c, 307 - pw, 16, pw, 28, 14);
        c.strokeStyle = '#f5f7e23d';
        c.stroke();
        this.text(c, s.category, 319 - pw, 33, 9.5, '#BEC5B7');
        c.beginPath();
        c.arc(325, 30, 14, 0, Math.PI * 2);
        c.stroke();
        this.text(c, 'Read', 315, 33, 8, '#BEC5B7');
    }
    smallMedia(c: CanvasRenderingContext2D, im: HTMLImageElement, x: number, y: number, w: number, h: number, n: number, t: number) {
        c.save();
        if (n) {
            c.translate(x + w / 2, y + h / 2);
            c.rotate(-.045);
            c.translate(-x - w / 2, -y - h / 2);
        }
        else {
            c.translate(x + w / 2, y + h / 2);
            c.rotate(.025);
            c.translate(-x - w / 2, -y - h / 2);
        }
        capsule(c, x, y, w, h);
        c.clip();
        imageCover(c, im, x, y, w, h, 1.12 + Math.sin(t / 3300) * .04, .5, .34);
        c.fillStyle = n ? '#aaa0bc18' : '#c9eab114';
        c.fillRect(x, y, w, h);
        c.restore();
    }
}
