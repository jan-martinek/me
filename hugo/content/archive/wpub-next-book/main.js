const Follower = function(p) {
    this.drawRoute = function() {
      const el = this.determineRoute();

      p.push();
      p.stroke(0, 30);
      p.strokeWeight(3);
      p.line(el.mid.x, el.mid.y, p.mouseX, p.mouseY);
      p.pop();
    }

    this.determineRoute = function() {
      const links = this.findLinks();
      const linkMids = this.calcMids(links);
      return this.findClosestLink(linkMids);
    }

    this.findLinks = function() {
      return [].slice.call(
        document.querySelectorAll("article a")
      ).map(
        function(el) { return { rect: el.getBoundingClientRect(), el: el } }
      ).filter(
        function(el) { return el.rect.top > 0 && el.rect.left > 0 }
      );
    }

    this.calcMids = function(els) {
      return els.map(function(el) {
        el.mid = p.createVector(el.rect.left + el.rect.width/2, el.rect.top + el.rect.height/2);
        return el;
      });
    }

    this.findClosestLink = function(els) {
      return els.reduce(function(acc, el) {
        const len = p5.Vector.sub(el.mid, p.createVector(p.mouseX, p.mouseY));

        p.stroke(0, 10);
        p.line(el.mid.x, el.mid.y, p.mouseX, p.mouseY);

        if (acc == null || acc.len.mag() > len.mag()) {
          el.len = len;
          acc = el;
        }

        return acc;
      }, null)
    }
  }


const s = function(p) {
  const x = 100;
  const y = 100;
  const follower = new Follower(p);


  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.frameRate(30);
  };



  p.draw = function() {
    p.clear();
    p.cursor('cursor.png');
    p.fill(0);
    //p.rect(p.mouseX,p.mouseY,50,50);

    follower.drawRoute();
  };
};

const myp5 = new p5(s);
