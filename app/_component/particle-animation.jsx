// @ts-nocheck - may need to be at the start of file
"use client";

import { useEffect, useRef } from "react";
export default function ParticleAnimation({ IMAGE_URI }) {
  const canvasRef = useRef();

  const handleCanvasGraphics = () => {
    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const base_image = new Image();
      base_image.src = IMAGE_URI;
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      const topDeviation = canvas.offsetTop;
      const leftDeviation = canvas.offsetLeft;

      class Particle {
        constructor(effect, x, y, colour) {
          this.effect = effect;
          this.x = x; //Math.random() * this.effect.canvasWidth;
          this.y = y; //change this to alter the position of entering animation
          this.color = colour;
          this.originX = x;
          this.originY = y;
          this.size = this.effect.gap;
          this.dx = 0;
          this.dy = 0;
          this.vx = 0; //horizontal speed
          this.vy = 0; //vertical speed
          this.force = 0;
          this.angle = 0;
          this.distance = 0;
          this.friction = Math.random() * 0.6 + 0.15;
          this.ease = Math.random() * 0.1 + 0.005;
        }
        draw() {
          this.effect.context.fillStyle = this.color;
          this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }
        update() {
          this.dx = this.effect.mouse.x - this.x;
          this.dy = this.effect.mouse.y - this.y;
          this.distance = this.dx * this.dx + this.dy * this.dy;
          this.force = -this.effect.mouse.radius / this.distance;

          if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
          }
          this.x +=
            (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
          this.y +=
            (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
      }
      class Effect {
        constructor(context, canvasWidth, canvasHeight, isImage) {
          this.context = context;
          this.canvasWidth = canvasWidth;
          this.canvasHeight = canvasHeight;
          this.isImage = isImage;
          this.textX = canvasWidth / 2;
          this.textY = canvasHeight / 2;
          this.fontSize = 200;
          this.lineHeight = this.fontSize * 0.8;
          this.maxTextWidth = this.canvasWidth * 0.8;

          //particle text
          this.particles = [];
          this.gap = this.isImage ? 7 : 3;
          this.mouse = {
            radius: 10000, //change what radius the particles are displaced
            x: 0,
            y: 0,
          };
          //get the current position of the mouse and subtract deviation from coordinate (0,0) position
          window.addEventListener("mousemove", (e) => {
            this.mouse.x = e.x - leftDeviation;
            this.mouse.y = e.y - topDeviation;
          });
        }
        wrapText(text) {
          if (this.isImage) {
            base_image.onload = () => {
              this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
              this.context.drawImage(
                base_image,
                0,
                0,
                this.canvasWidth,
                this.canvasHeight
              );
              this.convertToParticles();
            };
          } else {
            this.context.fillStyle = "blue";
            this.context.stokeStyle = "orangered";
            this.context.font = `${this.fontSize}px Arial`;
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            this.context.lineWidth = 3;

            //break text into individual lines
            let linesArray = [];
            let words = text.split(" ");
            let lineCounter = 0;
            let line = "";
            for (let i = 0; i < words.length; i++) {
              let testLine = line + words[i] + " ";
              if (
                this.context.measureText(testLine).width > this.maxTextWidth
              ) {
                line = words[i] + " ";
                lineCounter++;
              } else {
                line = testLine;
              }
              linesArray[lineCounter] = line;
            }
            let textHeight = this.lineHeight * lineCounter;
            this.textY = this.canvasHeight / 2 - textHeight / 2;
            linesArray.forEach((el, index) => {
              this.context.fillText(
                el,
                this.textX,
                this.textY + index * this.lineHeight
              );
            });
            this.convertToParticles();
          }
        }
        convertToParticles() {
          this.particles = [];
          //this function scans the canvas to extract the image data
          const pixels = this.context.getImageData(
            0,
            0,
            this.canvasWidth,
            this.canvasHeight
          ).data;
          this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
          for (let y = 0; y < this.canvasHeight; y += this.gap) {
            for (let x = 0; x < this.canvasWidth; x += this.gap) {
              const index = (y * this.canvasWidth + x) * 4;
              const alpha = pixels[index + 3];
              if (alpha > 0) {
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const colour = `rgb(${red},${green},${blue})`;
                this.particles.push(new Particle(this, x, y, colour));
              }
            }
          }
        }
        render() {
          this.particles.forEach((particle) => {
            particle.update();
            particle.draw();
          });
        }
      }

      const effect = new Effect(ctx, canvas.width, canvas.height, true);
      effect.wrapText("MindWalks");
      effect.render();
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        requestAnimationFrame(animate);
      }
      animate();
    } catch (error) {}
  };

  useEffect(() => {
    handleCanvasGraphics();
  }, [canvasRef]);

  return (
    <div className={"w-full h-full"}>
      <canvas className="w-full h-full z-10" ref={canvasRef} id="canvas_id" />
    </div>
  );
}
