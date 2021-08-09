                                                                                                                                           
<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://user-images.githubusercontent.com/6705096/128585646-0690663e-c1f9-4b54-b879-31449a089f35.png" alt="Bootstrap logo" width="200">
  </a>
</p>

# Casanova

https://youngjae99.github.io/Casanova/

이 말을 할까 말까 고민하는 당신을 위해 AI가 판단하고 도와줄께요!

Ainize에서 제공하는 두 모델 API를 사용했습니다. BERT기반 한국어 문장 공격성 분류 모델을 제공하는 [SoongsilBERT-base-beep-deploy API](https://ainize.ai/strutive07/SoongsilBERT-base-beep-deploy)를 통해 문장의 Hate or Offensive가 있는지를 바탕으로 멘트 점수(매력도)를 측정하고, KoGPT2와 Datasets from Instructions (DINO 🦕)를 이용하여 데이터를 생성하는 [KoGPT2-DINO API](https://ainize.ai/fpem123/KoGPT2-DINO)를 이용해 유사하거나 동일한 의미를 갖는 문장을 AI가 더 나은 멘트를 추천해줍니다.


# How to run
- `docker pull youngjae99/casanova`
- `docker-compose up -d --build`

# Example input

![image](https://user-images.githubusercontent.com/6705096/128650417-317977ac-d989-4f27-b3a7-851b30e2a241.png)

