// @ts-check
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Ingredients",
    description:
      "2 cups cashew nuts, 1 cup sugar, 1/2 cup water, 5 drops kewra essence, ghee (or oil - Just for greasing).",
    icon: GlobeAltIcon,
  },
  {
    name: "Directions",
    description:
      "Step 1. Powder the cashews in a dry mixer for 1 minute. Cashew nut should be at room temperature as refrigerated cashews will turn pasty upon grinding. Step 2. Place a pan over medium flame, add water and sugar. Turn the flame to minimum heat and stir the sugar solution. Cook the sugar syrup for just 30 to 40 seconds. At this stage be careful that you don’t need any thread consistency, just dissolve the sugar in water. Add in cashew powder prepared in step 1.Step 3. Mix the mixture and be sure that heat is the minimum. Add the kewra essence. Cook the mixture and check the consistency. First it will convert into dropping consistency. Step 4. Then the mixture starts coming together as dough. Step 5. Touch the dough mixture, when you can able to handle the heat in the mixture, smear few drops of ghee or oil on hands and start kneading the cashew mixture till the mixture turns to smooth dough. This will take about a one minute. Now take a butter paper or greased plate and roll the dough with rolling-pin. You can adjust the thickness according to your choice. I like it thinner. Step 6. Roll the dough in rectangle shape so that it becomes easy to cut barfi in diamond shape. That’s the traditional shape of this katli. Cut the dough into diamond shape and decorate with silver leaf. Kaju katli is ready to serve. You can also store it for 6-7 days at room temperature.",
    icon: ScaleIcon,
  },
  {
    name: "Link to video tutorial",
    description: "https://youtu.be/DzYFHk6_59M",
    icon: LightningBoltIcon,
  },
];

const EducationalProject = () => {
  return (
    <>
      <div className="m-3 p-3">
        <h1 className="text-white text-3xl font-bold mb-2">
          Educational Project
        </h1>
        <div className="py-12 bg-purple-700 rounded">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="mb-3 font-mono font-bold text-2xl text-white">
              Dessert: Kaju Katli
            </h2>
            <p className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-8">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-purple-50">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-purple-50">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationalProject;
