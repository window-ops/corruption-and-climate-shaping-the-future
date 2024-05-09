const game = document.getElementById('game');
const universeSelect = document.getElementById('universe-select');
const timeSelect = document.getElementById('time-select');
const travelButton = document.getElementById('travel-button');
const descriptionDiv = document.getElementById('description');

class Universe {
    constructor(name, past, present, future) {
        this.name = name;
        this.past = past;
        this.present = present;
        this.future = future;
    }
}

const universes = [
    new Universe('Universe 1: No Effort', 'In this universe, the government has always been deeply corrupt, and the effects of climate change have been completely ignored. The seeds of dystopia were sown long ago, as the ruling elite prioritized their own wealth and power over the well-being of the people. The population lives in a state of constant fear and uncertainty, with limited access to resources and a crumbling infrastructure.', 'The government is now a ruthless, authoritarian regime, with widespread corruption and a complete disregard for the environment. Climate policy is non-existent, and irreversible chain reactions have already begun to appear, leading to a bleak and deteriorating situation. The majority of the population struggles to survive, with rising poverty, pollution, and social unrest.', 'The future in this universe is a dystopian nightmare, with a devastated environment, widespread poverty, and a population living in constant fear and despair. The effects of climate change have spiraled out of control, leading to natural disasters, food and water shortages, and the collapse of essential services. The government has become a totalitarian regime, using brutal force to maintain its grip on power, while the people fight for their very survival.'),
    new Universe('Universe 2: Minimal Effort', 'In this universe, the government was once honest and well-intentioned, but over time, power and greed corrupted them. Climate change warnings were largely ignored, and the effects are now starting to take a significant toll on the population. The government\'s response has been slow and ineffective, further eroding public trust.', 'The government is now deeply corrupt, and climate policy is extremely weak. Irreversible chain reactions have begun to appear, leading to a deteriorating situation. Pollution levels are rising, and the effects of climate change are becoming increasingly severe, with natural disasters, food shortages, and social unrest becoming more common. The population is divided, with a growing wealth gap and a significant portion living in poverty.', 'The future in this universe is dystopian, with a significant portion of the population living in poverty and pollution levels reaching critical levels. The effects of climate change are severe and difficult to manage, with rising sea levels, droughts, and other environmental catastrophes. The government is struggling to maintain control, and social unrest is widespread. The population faces an uncertain and bleak future, with limited access to resources and a declining quality of life.'),
    new Universe('Universe 3: Moderate Effort', 'In this universe, the government has generally been fair and just, but the challenges of climate change have proven to be overwhelming. While some efforts have been made to address environmental issues, corruption and political gridlock have hindered progress. The population is divided, with some enjoying a relatively comfortable life, while others struggle with the effects of a changing climate.', 'The government is corrupt, and climate policy is very weak. Irreversible chain reactions have begun to appear, leading to a concerning situation. Pollution levels are high, and the effects of climate change are becoming increasingly apparent, with more frequent natural disasters and resource scarcity. The population is divided, with a growing wealth gap and a significant portion living in precarious conditions.', 'The future in this universe is somewhat stable, with most people living comfortable lives, but the effects of climate change are becoming increasingly apparent and difficult to address. The government has struggled to implement effective policies, and the population faces an uncertain future, with the potential for more severe environmental and social challenges.'),
    new Universe('Universe 4: Significant Effort', 'In this universe, the government has been proactive in addressing climate change, but corruption has hindered their efforts. While significant progress has been made in areas like renewable energy and environmental protection, the legacy of corruption and political infighting has slowed the pace of change. The population is generally better off than in other universes, but there is still work to be done to create a truly sustainable and equitable future.', 'The government is corrupt, but climate policy is stronger than in other universes. Efforts are being made to mitigate the effects of climate change, but the situation remains challenging. Pollution levels are lower, and the population enjoys a higher standard of living, but the effects of climate change are still being felt, with natural disasters and resource scarcity posing ongoing threats.', 'The future in this universe is promising, with most people living fulfilling lives and the effects of climate change being managed effectively, though the legacy of corruption lingers. The government has made significant strides in addressing environmental issues, and the population enjoys a relatively high standard of living in a more sustainable and resilient society. However, the work is not yet complete, and the potential for further progress remains.'),
    new Universe('Universe 5: Substantial Effort', 'In this universe, the government has been a global leader in climate policy and the fight against corruption. The effects of climate change are barely noticeable, as the government has invested heavily in renewable energy, environmental protection, and sustainable infrastructure. The population enjoys a high standard of living, with access to clean air, water, and abundant resources.', 'The government in this universe is not corrupt, and climate policy is extremely strong. Irreversible chain reactions have been prevented, and the population enjoys a high standard of living in a healthy environment. Renewable energy sources power the economy, and the government has implemented robust policies to protect the environment and promote sustainability.', 'The future in this universe is excellent, with a thriving, equitable society and a resilient, sustainable planet. The government\'s efforts to combat corruption and address climate change have paid off, creating a prosperous and equitable future for all. The population enjoys a high quality of life, with access to clean air, water, and abundant resources, and the effects of climate change are barely noticeable. This universe represents the best-case scenario, where strong government action and a commitment to sustainability have led to a brighter, more sustainable future for all.')
];

travelButton.addEventListener('click', () => {
    const selectedUniverse = universes[universeSelect.value - 1];
    const selectedTime = timeSelect.value;
    let description = '';

    if (selectedUniverse && selectedTime) {
        if (selectedTime === 'past') {
            description = selectedUniverse.past;
        } else if (selectedTime === 'present') {
            description = selectedUniverse.present;
        } else if (selectedTime === 'future') {
            description = selectedUniverse.future;
        }
    }

    descriptionDiv.textContent = description;
});