enum Direction{
    'Nord',
    'Sud',
    'Est',
    'Ouest'
}
function vecteurDirection(direction: Direction): [number, number] {
    switch (direction) {
        case Direction.Nord:
            return [0,1];
        case Direction.Sud:
            return [0,-1];
        case Direction.Est:
            return [1,0];
        case Direction.Ouest:
            return [-1,0];
            
        default:
                throw new Error("Direction invalide");
    }
}
function deplacer(
    point: [number, number],
    direction: Direction
  ): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
  }
  let point1: [number, number] = [5, 5];
  console.log("Point initial :", point1);
  point1 = deplacer(point1, Direction.Nord);
  console.log("Après déplacement vers le Nord :", point1);
  point1 = deplacer(point1, Direction.Est);
  console.log("Après déplacement vers l'Est :", point1);
  point1 = deplacer(point1, Direction.Sud);
  console.log("Après déplacement vers le Sud :", point1);
  point1 = deplacer(point1, Direction.Ouest);
  console.log("Après déplacement vers l'Ouest :", point1);
  /*
console.log("Nord :", vecteurDirection(Direction.Nord));
console.log("Sud :", vecteurDirection(Direction.Sud));
console.log("Est :", vecteurDirection(Direction.Est));
console.log("Ouest :", vecteurDirection(Direction.Ouest));*/