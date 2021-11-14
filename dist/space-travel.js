const centerOf = ({ width , height  })=>[
        half(width),
        half(height)
    ]
;
const resetCanvas = (canvas)=>{
    const context = canvas.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.fillStyle = "rgba(0,0,0,0.2)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.translate(...centerOf(canvas));
};
const star = ({ color , velocity , speed , v  })=>{
    const { x , y , z  } = v;
    return {
        velocity,
        color,
        speed,
        x,
        y,
        z,
        v
    };
};
const range = (n)=>[
        ...Array(n).keys()
    ]
;
const canvas = document.getElementById("space-canvas");
const initiateCanvas = (canvas)=>{
    const context = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
};
const random = (x, y)=>Math.floor(Math.random() * y * 2) + x
;
const getColor = ()=>"hsla(200,100%, " + random(50, 100) + "%, 1)"
;
const half = (x)=>x / 2
;
const starVector = (canvas)=>({
        x: random(-half(canvas.width), half(canvas.width)),
        y: random(-half(canvas.height), half(canvas.height)),
        z: random(1, 12)
    })
;
const addVector = (v1, v2)=>({
        x: v1.x + v2.x,
        y: v1.y + v2.y,
        z: v1.z + v2.z
    })
;
const getNextStarVector = ({ v , velocity , speed  })=>{
    const { x: x2 , y: y2 , z: z2  } = addVector(v, velocity);
    return {
        x: x2 / z2,
        y: y2 / z2,
        dx: x2 / (z2 + speed * 0.5),
        dy: y2 / (z2 + speed * 0.5),
        nextVector: addVector(v, velocity)
    };
};
const updateStar = (star)=>({
        ...star,
        dv: getNextStarVector(star)
    })
;
const outside = (canvas, { x , y  })=>x < -half(canvas.width) || x > half(canvas.width) || y < -half(canvas.height) || y > half(canvas.height)
;
const resetStar = (canvas)=>(star)=>{
        const { dv: { x , y , nextVector  } ,  } = star;
        if (outside(canvas, {
            x,
            y
        })) {
            return {
                ...star,
                v: starVector(canvas)
            };
        } else {
            return {
                ...star,
                v: nextVector
            };
        }
    }
;
const starToDrawable = (star)=>({
        ...star,
        ...star.dv
    })
;
const drawStar = (canvas)=>({ x , y , dx , dy , color  })=>{
        const context = canvas.getContext("2d");
        context.strokeStyle = color;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(dx, dy);
        context.stroke();
    }
;
const VELOCITY = Object.freeze({
    x: 0,
    y: 0,
    z: -0.075
});
const render = (canvas, stars)=>()=>{
        resetCanvas(canvas);
        const nextStars = stars.map(updateStar).map(resetStar(canvas));
        nextStars.map(starToDrawable).forEach(drawStar(canvas));
        requestAnimationFrame(render(canvas, nextStars));
    }
;
const main = (canvas)=>{
    initiateCanvas(canvas);
    const stars = range(1000).map((_)=>star({
            velocity: VELOCITY,
            speed: 0.075,
            color: getColor(),
            v: starVector(canvas)
        })
    );
    render(canvas, stars)();
};
main(canvas);
