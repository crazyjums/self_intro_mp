import struct
import zlib

SIZE = 81
ACTIVE = (16, 185, 129, 255)
INACTIVE = (142, 142, 147, 255)

def make_png(path, pixels):
    def chunk(tag, data):
        c = struct.pack('>I', len(data)) + tag + data
        return c + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)
    raw = b''
    for y in range(SIZE):
        raw += b'\x00'
        for x in range(SIZE):
            raw += bytes(pixels[y][x])
    ihdr = struct.pack('>IIBBBBB', SIZE, SIZE, 8, 6, 0, 0, 0)
    png = b'\x89PNG\r\n\x1a\n'
    png += chunk(b'IHDR', ihdr)
    png += chunk(b'IDAT', zlib.compress(raw))
    png += chunk(b'IEND', b'')
    with open(path, 'wb') as f:
        f.write(png)

def blank():
    return [[(0, 0, 0, 0) for _ in range(SIZE)] for _ in range(SIZE)]

def set_px(pixels, x, y, color):
    if 0 <= x < SIZE and 0 <= y < SIZE:
        pixels[y][x] = color

def fill_rect(pixels, x1, y1, x2, y2, color):
    for y in range(y1, y2):
        for x in range(x1, x2):
            set_px(pixels, x, y, color)

def fill_circle(pixels, cx, cy, r, color):
    for y in range(cy - r, cy + r + 1):
        for x in range(cx - r, cx + r + 1):
            if (x - cx) ** 2 + (y - cy) ** 2 <= r * r:
                set_px(pixels, x, y, color)

def fill_triangle(pixels, p1, p2, p3, color):
    minx = max(0, min(p1[0], p2[0], p3[0]))
    maxx = min(SIZE - 1, max(p1[0], p2[0], p3[0]))
    miny = max(0, min(p1[1], p2[1], p3[1]))
    maxy = min(SIZE - 1, max(p1[1], p2[1], p3[1]))
    def sign(a, b, c):
        return (a[0] - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (a[1] - c[1])
    for y in range(miny, maxy + 1):
        for x in range(minx, maxx + 1):
            d1 = sign((x, y), p1, p2)
            d2 = sign((x, y), p2, p3)
            d3 = sign((x, y), p3, p1)
            neg = (d1 < 0) or (d2 < 0) or (d3 < 0)
            pos = (d1 > 0) or (d2 > 0) or (d3 > 0)
            if not (neg and pos):
                set_px(pixels, x, y, color)

def draw_home(color):
    p = blank()
    fill_triangle(p, (40, 10), (74, 40), (6, 40), color)
    fill_rect(p, 14, 36, 66, 72, color)
    return p

def draw_briefcase(color):
    p = blank()
    fill_rect(p, 12, 30, 68, 72, color)
    fill_rect(p, 30, 18, 50, 32, color)
    return p

def draw_folder(color):
    p = blank()
    fill_rect(p, 10, 20, 70, 64, color)
    fill_triangle(p, (10, 20), (38, 20), (42, 32), color)
    return p

def draw_pulse(color):
    p = blank()
    fill_rect(p, 16, 18, 28, 62, color)
    fill_rect(p, 36, 32, 48, 62, color)
    fill_rect(p, 56, 10, 68, 62, color)
    return p

def draw_mail(color):
    p = blank()
    fill_rect(p, 10, 24, 70, 58, color)
    fill_triangle(p, (10, 24), (40, 44), (70, 24), color)
    return p

for name, fn in [('home', draw_home), ('briefcase', draw_briefcase), ('folder', draw_folder), ('pulse', draw_pulse), ('mail', draw_mail)]:
    make_png('images/tab-%s.png' % name, fn(INACTIVE))
    make_png('images/tab-%s-active.png' % name, fn(ACTIVE))
    print('generated tab-%s' % name)
