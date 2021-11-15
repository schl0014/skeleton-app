class Animal {
  private readonly name: string;

  private readonly legs: number;

  private readonly sound: string;

  /**
   *
   * @param name name
   * @param legs legs
   * @param sound sound
   */
  public constructor(name: string, legs: number, sound: string) {
    this.name = name;
    this.legs = legs;
    this.sound = sound;
  }

  /**
   *
   * @returns name
   */
  public getName(): string {
    return this.name;
  }

  /**
   *
   * @returns legs
   */
  public getLegs(): number {
    return this.legs;
  }

  /**
   *
   * @returns sound
   */
  public getSound(): string {
    return this.sound;
  }
}

const animals = [
  new Animal('dog', 4, 'woof'),
  new Animal('cat', 4, 'meow'),
];

animals.forEach(
  (animal) => console.log(
    'A %s has %s legs and goes %s!',
    animal.getName(),
    animal.getLegs(),
    animal.getSound(),
  ),
);
