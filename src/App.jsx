import React, { useState } from 'react';
// 课程数据
const courses = [
  {
    id: 1,
    title: "水的奇妙世界",
    description: "认识水的特性，了解为什么我们能在水中漂浮",
    difficulty: "入门",
    color: "#4CAF50",
    icon: "💧",
    chapters: [
      { id: 1, title: "水是什么感觉？", content: "waterIntro" },
      { id: 2, title: "为什么东西能浮起来？", content: "buoyancyBasic" }
    ]
  },
  {
    id: 2,
    title: "浮力的秘密",
    description: "学习阿基米德原理，理解人体与水的关系",
    difficulty: "基础",
    color: "#2196F3",
    icon: "⚓",
    chapters: [
      { id: 3, title: "阿基米德的发现", content: "archimedes" },
      { id: 4, title: "人体浮力实验", content: "bodyBuoyancy" }
    ]
  },
  {
    id: 3,
    title: "游泳中的力量",
    description: "了解推进力和阻力，学习不同泳姿的力学原理",
    difficulty: "进阶",
    color: "#FF9800",
    icon: "🏊",
    chapters: [
      { id: 5, title: "推进力从哪里来？", content: "propulsion" },
      { id: 6, title: "阻力是什么？", content: "resistance" },
      { id: 7, title: "各种泳姿的秘密", content: "swimmingStyles" }
    ]
  },
  {
    id: 4,
    title: "身体是台机器",
    description: "学习杠杆原理，掌握更高效的游泳技巧",
    difficulty: "高阶",
    color: "#9C27B0",
    icon: "🦾",
    chapters: [
      { id: 8, title: "什么是杠杆？", content: "leverIntro" },
      { id: 9, title: "游泳中的杠杆动作", content: "swimmingLevers" },
      { id: 10, title: "如何游得更快更好", content: "efficientSwimming" }
    ]
  }
];

// 章节内容组件
const ChapterContent = ({ content }) => {
  const renderContent = () => {
    switch(content) {
      // 游泳课程
      case 'waterIntro':
        return <WaterIntroduction />;
      case 'buoyancyBasic':
        return <BuoyancyBasic />;
      case 'archimedes':
        return <ArchimedesPrinciple />;
      case 'bodyBuoyancy':
        return <BodyBuoyancy />;
      case 'propulsion':
        return <PropulsionForce />;
      case 'resistance':
        return <ResistanceForce />;
      case 'swimmingStyles':
        return <SwimmingStyles />;
      case 'leverIntro':
        return <LeverIntroduction />;
      case 'swimmingLevers':
        return <SwimmingLevers />;
      case 'efficientSwimming':
        return <EfficientSwimming />;
      // 跑步课程
      case 'runningIntro':
        return <RunningIntroduction />;
      case 'runningBasics':
        return <RunningBasics />;
      case 'gravitySupport':
        return <GravitySupport />;
      case 'propulsionFriction':
        return <PropulsionFriction />;
      case 'cadenceStride':
        return <CadenceStride />;
      case 'postureOptimization':
        return <PostureOptimization />;
      case 'energyRecovery':
        return <EnergyRecovery />;
      case 'injuryPrevention':
        return <InjuryPrevention />;
      default:
        return <div>内容加载中...</div>;
    }
  };

  return (
    <div className="chapter-content">
      {renderContent()}
    </div>
  );
};

// 水的介绍组件
const WaterIntroduction = () => (
  <div className="lesson-content">
    <h2>💧 水是什么感觉？</h2>
    
    <div className="interactive-demo">
      <h3>互动小实验：感受水的特性</h3>
      <div className="demo-box">
        <div className="water-animation">
          <div className="water-particle"></div>
          <div className="hand-icon">🖐️</div>
        </div>
        <p>试着想象把手放进水里的感觉...</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🔍 水的小秘密</h3>
      <ul>
        <li>水有重量，所以会产生压力</li>
        <li>水会"托起"轻的物体</li>
        <li>在水中我们的身体感觉更轻</li>
        <li>水可以流动，但也会产生阻力</li>
      </ul>
    </div>

    <div className="fun-fact">
      <h3>🌟 有趣的小知识</h3>
      <p>你知道吗？人体大约70%都是水！这就是为什么我们在水里感觉那么亲切的原因。</p>
    </div>
  </div>
);

// 基础浮力组件
const BuoyancyBasic = () => {
  const [selectedObject, setSelectedObject] = React.useState(null);
  const [isInWater, setIsInWater] = React.useState(false);

  const objects = [
    { id: 1, emoji: '🏐', name: '篮球', floats: true },
    { id: 2, emoji: '🪨', name: '石头', floats: false },
    { id: 3, emoji: '🍎', name: '苹果', floats: true },
    { id: 4, emoji: '🔑', name: '钥匙', floats: false }
  ];

  const handleObjectClick = (object) => {
    setSelectedObject(object);
    setIsInWater(true);
    setTimeout(() => setIsInWater(false), 2000);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsInWater(false);
      setSelectedObject(null);
    }, 3000);
    return () => clearInterval(timer);
  }, [selectedObject]);

  return (
    <div className="lesson-content">
      <h2>⚓ 为什么东西能浮起来？</h2>
      
      <div className="interactive-demo">
        <h3>互动实验：浮还是沉？</h3>
        <div className="float-demo">
          <div className="objects-container">
            {objects.map(object => (
              <div 
                key={object.id}
                className={`object-item ${selectedObject?.id === object.id ? 'selected' : ''}`}
                onClick={() => handleObjectClick(object)}
              >
                <span>{object.emoji}</span>
                <p>{object.name}</p>
              </div>
            ))}
          </div>
          <div className="water-tank">
            <div className="water">
              💧 水
              {selectedObject && (
                <div className={`test-object ${isInWater ? 'in-water' : ''} ${selectedObject.floats ? 'floating' : 'sinking'}`}>
                  {selectedObject.emoji}
                </div>
              )}
            </div>
            {selectedObject && isInWater && (
              <div className="result-message">
                {selectedObject.floats ? '🎉 漂起来了！' : '⚓ 下沉了！'}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="explanation">
        <h3>🧠 为什么会这样？</h3>
        <div className="rule-box">
          <p><strong>简单规则：</strong></p>
          <ul>
            <li>如果物体比同样体积的水轻 → 漂浮 🏊</li>
            <li>如果物体比同样体积的水重 → 下沉 ⚓</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 阿基米德原理组件
const ArchimedesPrinciple = () => (
  <div className="lesson-content">
    <h2>🏛️ 阿基米德的发现</h2>
    
    <div className="fun-fact">
      <h3>📖 古老的故事</h3>
      <p>传说古希腊的阿基米德在洗澡时，看到水溢出浴缸，突然明白了浮力的原理！他兴奋地跳出浴缸，喊着"尤里卡！"（我发现了！）</p>
    </div>

    <div className="interactive-demo">
      <h3>🧪 模拟实验：浴缸实验</h3>
      <div className="demo-box">
        <div className="bathtub-demo">
          <div className="bathtub">🛁</div>
          <div className="water-level">水位线</div>
          <div className="person-in-water">🧑‍🦱</div>
        </div>
        <p>当你进入水中，水位会上升...</p>
        <div className="result-box">
          <h4>💡 阿基米德原理（简化版）</h4>
          <p>水托起你的力 = 你排开的水的重量</p>
        </div>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🎯 生活中的应用</h3>
      <ul>
        <li>轮船能浮在海上，因为它排开了大量海水</li>
        <li>救生衣能救人，因为它增加了排开水的体积</li>
        <li>潜水艇通过调节排水量来上浮下沉</li>
      </ul>
    </div>
  </div>
);

// 人体浮力组件
const BodyBuoyancy = () => (
  <div className="lesson-content">
    <h2>🏊‍♀️ 人体浮力实验</h2>
    
    <div className="interactive-demo">
      <h3>🔍 为什么人在水里感觉更轻？</h3>
      <div className="demo-box">
        <div className="weight-comparison">
          <div className="on-land">
            <span>🧑‍🦱</span>
            <p>陆地上：重50公斤</p>
          </div>
          <div className="in-water">
            <span>🏊‍♀️</span>
            <p>水中：感觉只有5公斤！</p>
          </div>
        </div>
      </div>
    </div>

    <div className="explanation">
      <h3>🧬 人体的秘密</h3>
      <div className="rule-box">
        <p><strong>人体组成：</strong></p>
        <ul>
          <li>肺部充满空气 → 像个气球 🎈</li>
          <li>脂肪比水轻 → 天然救生衣 🦺</li>
          <li>骨骼比水重 → 但占比不大 🦴</li>
        </ul>
        <p><strong>结果：人体平均密度≈水密度，所以能浮起来！</strong></p>
      </div>
    </div>

    <div className="fun-fact">
      <h3>🌟 有趣的事实</h3>
      <p>在死海里，任何人都能轻松漂浮！因为死海的水含盐量很高，密度比普通水大很多。</p>
    </div>
  </div>
);

// 推进力组件
const PropulsionForce = () => (
  <div className="lesson-content">
    <h2>🚀 推进力从哪里来？</h2>
    
    <div className="interactive-demo">
      <h3>🏊‍♂️ 游泳中的推进力</h3>
      <div className="demo-box">
        <div className="swimmer-animation">
          <div className="swimmer">🏊‍♂️</div>
          <div className="water-particles">
            <div className="particle">💧</div>
            <div className="particle">💧</div>
            <div className="particle">💧</div>
          </div>
        </div>
        <p>手和脚向后推水 → 身体向前游</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🔧 推进力的原理</h3>
      <ul>
        <li>牛顿第三定律：作用力=反作用力</li>
        <li>手向后推水，水向前推你</li>
        <li>推水的面积越大 → 推进力越大</li>
        <li>推水的速度越快 → 推进力越大</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>💡 实用技巧</h3>
      <div className="rule-box">
        <ul>
          <li>用手掌而不是手指推水 → 增大面积</li>
          <li>手臂完全伸展 → 增加推水距离</li>
          <li>用力但不要紧张 → 保持动作流畅</li>
        </ul>
      </div>
    </div>
  </div>
);

// 阻力力组件
const ResistanceForce = () => (
  <div className="lesson-content">
    <h2>🌊 阻力是什么？</h2>
    
    <div className="fun-fact">
      <h3>🤔 思考一下</h3>
      <p>为什么在水中走路比在陆地上累得多？</p>
      <p>答案：水会产生阻力！</p>
    </div>

    <div className="interactive-demo">
      <h3>🎯 阻力实验</h3>
      <div className="demo-box">
        <div className="resistance-comparison">
          <div className="shape-box">
            <div className="shape-circle">⭕ 圆形</div>
            <p>阻力小 ⚡</p>
          </div>
          <div className="shape-box">
            <div className="shape-square">⬜ 方形</div>
            <p>阻力大 🐌</p>
          </div>
        </div>
        <p>形状不同，阻力不同！</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>📊 影响阻力的因素</h3>
      <ul>
        <li>速度越快 → 阻力越大</li>
        <li>面积越大 → 阻力越大</li>
        <li>形状越不流线型 → 阻力越大</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>🏊‍♀️ 游泳中的阻力</h3>
      <div className="rule-box">
        <p><strong>坏消息：</strong>水会拖慢你的速度</p>
        <p><strong>好消息：</strong>你也可以利用阻力来前进！</p>
        <ul>
          <li>推水时想要大阻力（获得推进力）</li>
          <li>滑行时想要小阻力（保持速度）</li>
        </ul>
      </div>
    </div>
  </div>
);

// 游泳姿势组件
const SwimmingStyles = () => (
  <div className="lesson-content">
    <h2>🏊‍♂️ 各种泳姿的秘密</h2>
    
    <div className="interactive-demo">
      <h3>🎨 不同泳姿的力学特点</h3>
      <div className="demo-box">
        <div className="swimming-styles">
          <div className="style-card">
            <h4>🦈 自由泳</h4>
            <p>最快速的泳姿</p>
            <ul>
              <li>身体流线型 → 阻力小</li>
              <li>手臂轮流转 → 持续推进力</li>
            </ul>
          </div>
          <div className="style-card">
            <h4>🐸 蛙泳</h4>
            <p>最省力的泳姿</p>
            <ul>
              <li>手脚同时用力 → 推进力大</li>
              <li>有滑行阶段 → 休息时间</li>
            </ul>
          </div>
          <div className="style-card">
            <h4>🦋 蝶泳</h4>
            <p>最用力的泳姿</p>
            <ul>
              <li>全身协调 → 推进力超大</li>
              <li>波浪动作 → 减少阻力</li>
            </ul>
          </div>
          <div className="style-card">
            <h4>⭐ 仰泳</h4>
            <p>最舒服的泳姿</p>
            <ul>
              <li>脸部向上 → 呼吸容易</li>
              <li>类似自由泳 → 速度较快</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="fun-fact">
      <h3>🌟 有趣的知识</h3>
      <p>世界顶级游泳运动员的速度可以达到每秒2米，比很多人走路还快！</p>
    </div>
  </div>
);

// 杠杆原理介绍组件
const LeverIntroduction = () => (
  <div className="lesson-content">
    <h2>🔧 什么是杠杆？</h2>
    
    <div className="fun-fact">
      <h3>🏛️ 古老的智慧</h3>
      <p>古希腊的阿基米德说过："给我一个支点，我就能撬动地球！"</p>
    </div>

    <div className="interactive-demo">
      <h3>⚖️ 杠杆的基本原理</h3>
      <div className="demo-box">
        <div className="lever-demo">
          <div className="lever-board">
            <div className="fulcrum">▲ 支点</div>
            <div className="effort">💪 用力</div>
            <div className="load">📦 重物</div>
          </div>
        </div>
        <p>杠杆 = 支点 + 用力点 + 负载点</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🎯 杠杆的神奇之处</h3>
      <ul>
        <li>小力气可以撬动大重物</li>
        <li>改变用力的位置，效果大不同</li>
        <li>我们的身体里到处都是杠杆！</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>🧪 生活中的杠杆</h3>
      <div className="rule-box">
        <ul>
          <li>剪刀 ✂️ - 剪刀的两片就是杠杆</li>
          <li>跷跷板 🎠 - 经典的杠杆游戏</li>
          <li>开瓶器 🍾 - 省力的杠杆工具</li>
        </ul>
      </div>
    </div>
  </div>
);

// 游泳中的杠杆组件
const SwimmingLevers = () => (
  <div className="lesson-content">
    <h2>🏊‍♀️ 游泳中的杠杆动作</h2>
    
    <div className="interactive-demo">
      <h3>🦾 身体中的杠杆系统</h3>
      <div className="demo-box">
        <div className="body-levers">
          <div className="arm-lever">
            <h4>手臂杠杆</h4>
            <div className="lever-diagram">
              <div className="shoulder">肩关节 (支点)</div>
              <div className="muscle">肌肉 (用力)</div>
              <div className="hand">手 (负载)</div>
            </div>
          </div>
          <div className="leg-lever">
            <h4>腿部杠杆</h4>
            <div className="lever-diagram">
              <div className="hip">髋关节 (支点)</div>
              <div className="thigh-muscle">大腿肌 (用力)</div>
              <div className="foot">脚 (负载)</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>💡 如何利用杠杆原理游得更好</h3>
      <ul>
        <li>手臂划水：肩关节是支点，肱二头肌收缩用力</li>
        <li>腿部打水：髋关节是支点，大腿肌群发力</li>
        <li>核心稳定：脊柱作为身体杠杆系统的支撑</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>🎯 关键技巧</h3>
      <div className="rule-box">
        <ul>
          <li>手臂完全伸展 → 增加杠杆长度</li>
          <li>从肩膀发力而不是手腕 → 更有力</li>
          <li>配合腰部转动 → 全身杠杆协调</li>
        </ul>
      </div>
    </div>
  </div>
);

// 高效游泳组件
const EfficientSwimming = () => (
  <div className="lesson-content">
    <h2>⚡ 如何游得更快更好</h2>
    
    <div className="interactive-demo">
      <h3>🏆 专业技巧大揭秘</h3>
      <div className="demo-box">
        <div className="technique-showcase">
          <div className="technique">
            <h4>🎯 流线型姿势</h4>
            <p>像鱼雷一样穿过水中</p>
            <div className="technique-tip">减少阻力 = 增加速度</div>
          </div>
          <div className="technique">
            <h4>💪 高效划水</h4>
            <p>用最大的面积推水</p>
            <div className="technique-tip">推进力最大化</div>
          </div>
          <div className="technique">
            <h4>⏱️ 完美节奏</h4>
            <p>动作连贯，不浪费能量</p>
            <div className="technique-tip">持久力的关键</div>
          </div>
        </div>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>📈 速度公式</h3>
      <ul>
        <li>速度 = 推进力 - 阻力</li>
        <li>增加推进力：更好的划水技巧</li>
        <li>减少阻力：更流线的身体姿势</li>
      </ul>
    </div>

    <div className="fun-fact">
      <h3>🌟 世界纪录保持者的秘密</h3>
      <p>顶级运动员不仅在力量上优秀，更在技术上做到完美，每个动作都符合力学原理！</p>
    </div>

    <div className="explanation">
      <h3>🎓 课程总结</h3>
      <div className="rule-box">
        <p><strong>恭喜你！现在你已经掌握了：</strong></p>
        <ul>
          <li>浮力的原理 🌊</li>
          <li>推进力和阻力的奥秘 ⚡</li>
          <li>杠杆在游泳中的应用 🔧</li>
          <li>如何成为游泳小能手 🏊‍♂️</li>
        </ul>
        <p>记住：科学让游泳变得更有趣、更高效！</p>
      </div>
    </div>
  </div>
);

// 跑步介绍组件
const RunningIntroduction = () => (
  <div className="lesson-content">
    <h2>🏃‍♂️ 为什么我们会跑步？</h2>
    
    <div className="fun-fact">
      <h3>🏛️ 跑步的历史</h3>
      <p>跑步是人类最古老的运动之一！从古代的狩猎到现代的奥运，跑步一直伴随着人类文明的发展。</p>
    </div>

    <div className="interactive-demo">
      <h3>🔍 跑步的基本原理</h3>
      <div className="demo-box">
        <div className="running-animation">
          <div className="runner">🏃‍♂️</div>
          <div className="ground">🌍 地面</div>
          <div className="force-arrow">⬇️ 重力</div>
        </div>
        <p>跑步是身体对抗重力的前进运动！</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🎯 跑步的核心要素</h3>
      <ul>
        <li>重力：地球对我们的拉力</li>
        <li>支撑力：地面给我们的反作用力</li>
        <li>推进力：肌肉收缩产生的动力</li>
        <li>平衡：身体协调控制的能力</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>💡 为什么跑步如此重要？</h3>
      <div className="rule-box">
        <ul>
          <li>增强心肺功能 ❤️</li>
          <li>锻炼腿部肌肉 💪</li>
          <li>提高身体协调性 ⚡</li>
          <li>释放压力，快乐心情 😊</li>
        </ul>
      </div>
    </div>
  </div>
);

// 跑步基础组件
const RunningBasics = () => (
  <div className="lesson-content">
    <h2>🏃‍♀️ 跑步的基本动作</h2>
    
    <div className="interactive-demo">
      <h3>🎬 跑步动作分解</h3>
      <div className="demo-box">
        <div className="running-steps">
          <div className="step">1. 抬腿 🦵</div>
          <div className="step">2. 蹬地 🦶</div>
          <div className="step">3. 摆臂 💪</div>
          <div className="step">4. 落地 🌍</div>
        </div>
        <p>完美的跑步循环！</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🔧 正确跑步姿势</h3>
      <ul>
        <li>抬头挺胸，目视前方 👀</li>
        <li>肩膀放松，手臂自然摆动 🤸</li>
        <li>身体微微前倾 ⬅️</li>
        <li>脚步轻盈，避免重重落地 🕊️</li>
        <li>呼吸均匀，节奏稳定 🌬️</li>
      </ul>
    </div>

    <div className="fun-fact">
      <h3>🌟 有趣的事实</h3>
      <p>你知道吗？人类平均每步会承受身体2-3倍的重量冲击，这就是为什么正确姿势如此重要！</p>
    </div>

    <div className="explanation">
      <h3>🎯 常见错误及纠正</h3>
      <div className="rule-box">
        <ul>
          <li><strong>错误：</strong>低头看地 → <strong>纠正：</strong>目视前方5-10米</li>
          <li><strong>错误：</strong>手臂横摆 → <strong>纠正：</strong>前后自然摆动</li>
          <li><strong>错误：</strong>步幅过大 → <strong>纠正：</strong>小步快频</li>
          <li><strong>错误：</strong>身体僵硬 → <strong>纠正：</strong>全身放松协调</li>
        </ul>
      </div>
    </div>
  </div>
);

// 重力支撑组件
const GravitySupport = () => (
  <div className="lesson-content">
    <h2>⬇️ 重力和支撑力</h2>
    
    <div className="fun-fact">
      <h3>🌍 地球的吸引力</h3>
      <p>重力是地球对所有物体的吸引力，它让我们不会飘到太空中去！</p>
    </div>

    <div className="interactive-demo">
      <h3>⚖️ 力的平衡</h3>
      <div className="demo-box">
        <div className="force-balance">
          <div className="gravity-force">⬇️ 重力 (向下)</div>
          <div className="runner-stick">🏃‍♂️</div>
          <div className="support-force">⬆️ 支撑力 (向上)</div>
        </div>
        <p>静止站立时：重力 = 支撑力</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🏃‍♂️ 跑步中的力的变化</h3>
      <ul>
        <li>腾空阶段：只有重力作用</li>
        <li>落地阶段：重力和支撑力同时作用</li>
        <li>蹬地阶段：支撑力 &gt; 重力（产生加速度）</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>💡 如何利用重力？</h3>
      <div className="rule-box">
        <ul>
          <li>身体前倾：让重力帮助前进</li>
          <li>小步快频：减少腾空时间</li>
          <li>轻柔落地：减少冲击力</li>
        </ul>
      </div>
    </div>
  </div>
);

// 推进摩擦力组件
const PropulsionFriction = () => (
  <div className="lesson-content">
    <h2>💨 推动力和摩擦力</h2>
    
    <div className="interactive-demo">
      <h3>🦶 脚与地的互动</h3>
      <div className="demo-box">
        <div className="foot-ground-interaction">
          <div className="foot">🦶</div>
          <div className="ground">🌍</div>
          <div className="friction-arrows">↔️ 摩擦力</div>
        </div>
        <p>没有摩擦力，我们寸步难行！</p>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🔬 摩擦力的双重作用</h3>
      <ul>
        <li><strong>正面作用：</strong>提供抓地力，让我们能前进</li>
        <li><strong>负面作用：</strong>产生阻力，消耗能量</li>
        <li><strong>平衡点：</strong>适当摩擦力，既不滑也不涩</li>
      </ul>
    </div>

    <div className="fun-fact">
      <h3>👟 跑鞋的科技</h3>
      <p>现代跑鞋的鞋底设计就是为了优化摩擦力！不同的路面需要不同的鞋底花纹。</p>
    </div>

    <div className="explanation">
      <h3>🎯 如何优化推进力？</h3>
      <div className="rule-box">
        <ul>
          <li>选择合适跑鞋：根据路面调整</li>
          <li>正确蹬地角度：向后下方45度最佳</li>
          <li>增加蹬地时间：充分发力</li>
          <li>利用路面弹性：在塑胶跑道效果更佳</li>
        </ul>
      </div>
    </div>
  </div>
);

// 步频步幅组件
const CadenceStride = () => (
  <div className="lesson-content">
    <h2>⚡ 步频和步幅</h2>
    
    <div className="interactive-demo">
      <h3>🏃‍♂️ 速度公式</h3>
      <div className="demo-box">
        <div className="speed-formula">
          <div className="formula-item">速度 = 步频 × 步幅</div>
          <div className="formula-explanation">
            <p><strong>步频：</strong>每分钟跑多少步</p>
            <p><strong>步幅：</strong>每一步跑多远</p>
          </div>
        </div>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🎯 两种提高速度的方法</h3>
      <ul>
        <li><strong>提高步频：</strong>加快脚步，像小马达</li>
        <li><strong>增大步幅：</strong>迈大步，像弹簧</li>
        <li><strong>最佳组合：</strong>高步频 + 适中步幅</li>
      </ul>
    </div>

    <div className="fun-fact">
      <h3>🌟 专业数据</h3>
      <p>顶级马拉松运动员的步频通常在每分钟180-190步，这是人类的最佳步频范围！</p>
    </div>

    <div className="explanation">
      <h3>💡 找到你的最佳节奏</h3>
      <div className="rule-box">
        <ul>
          <li>初学者：先练习正确姿势，再提高速度</li>
          <li>业余爱好者：目标步频170-180/分钟</li>
          <li>专业选手：保持180+步频，调整步幅</li>
        </ul>
      </div>
    </div>
  </div>
);

// 身体姿态组件
const PostureOptimization = () => (
  <div className="lesson-content">
    <h2>🎯 身体姿态优化</h2>
    
    <div className="interactive-demo">
      <h3>🏃‍♂️ 理想跑步姿态</h3>
      <div className="demo-box">
        <div className="posture-comparison">
          <div className="bad-posture">
            <h4>❌ 错误姿态</h4>
            <div className="posture-figure">🚶‍♂️</div>
            <p>身体后仰，头部低垂</p>
          </div>
          <div className="good-posture">
            <h4>✅ 正确姿态</h4>
            <div className="posture-figure">🏃‍♂️</div>
            <p>身体前倾，抬头挺胸</p>
          </div>
        </div>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🔧 各部位正确位置</h3>
      <ul>
        <li><strong>头部：</strong>抬头，目视前方，下巴微收</li>
        <li><strong>肩部：</strong>放松下沉，不要耸肩</li>
        <li><strong>手臂：</strong>前后摆动，手肘弯曲90度</li>
        <li><strong>躯干：</strong>挺直，微微前倾</li>
        <li><strong>腿部：</strong>高抬腿，轻落地</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>💡 姿态优化技巧</h3>
      <div className="rule-box">
        <ul>
          <li>想象头顶有根线向上拉 👆</li>
          <li>肩膀放松，手臂像钟摆 🕰️</li>
          <li>核心收紧，保持稳定 💪</li>
          <li>脚步轻盈，像猫咪落地 🐱</li>
        </ul>
      </div>
    </div>
  </div>
);

// 能量恢复组件
const EnergyRecovery = () => (
  <div className="lesson-content">
    <h2>🔋 能量消耗与恢复</h2>
    
    <div className="fun-fact">
      <h3>⚡ 人体能量系统</h3>
      <p>我们的身体就像混合动力车，有电池（糖原）和汽油（脂肪）两种燃料！</p>
    </div>

    <div className="interactive-demo">
      <h3>🏃‍♂️ 不同距离的能量策略</h3>
      <div className="demo-box">
        <div className="energy-strategies">
          <div className="strategy">
            <h4>短跑 (100m)</h4>
            <p>⚡ 爆发力，无氧运动</p>
            <div className="fuel">🔋 糖原供能</div>
          </div>
          <div className="strategy">
            <h4>中跑 (800m)</h4>
            <p>🔥 乳酸阈值，混合供能</p>
            <div className="fuel">🔋+🥑 糖原+脂肪</div>
          </div>
          <div className="strategy">
            <h4>长跑 (马拉松)</h4>
            <p>🌿 耐力型，有氧运动</p>
            <div className="fuel">🥑 脂肪为主</div>
          </div>
        </div>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>🍕 能量补充策略</h3>
      <ul>
        <li><strong>赛前：</strong>碳水化合物-loaded</li>
        <li><strong>赛中：</strong>能量胶、运动饮料</li>
        <li><strong>赛后：</strong>蛋白质+碳水，黄金30分钟</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>🛌 恢复的科学</h3>
      <div className="rule-box">
        <ul>
          <li><strong>立即恢复：</strong>拉伸、冷敷</li>
          <li><strong>短期恢复：</strong>睡眠、营养</li>
          <li><strong>长期恢复：</strong>周期训练、超量恢复</li>
        </ul>
      </div>
    </div>
  </div>
);

// 损伤预防组件
const InjuryPrevention = () => (
  <div className="lesson-content">
    <h2>🛡️ 避免运动损伤</h2>
    
    <div className="fun-fact">
      <h3>🏥 常见跑步损伤</h3>
      <p>70%的跑步损伤都是过度使用造成的，预防胜于治疗！</p>
    </div>

    <div className="interactive-demo">
      <h3>🎯 损伤预防金字塔</h3>
      <div className="demo-box">
        <div className="prevention-pyramid">
          <div className="pyramid-level base">
            <h4>基础层</h4>
            <p>正确姿势 + 合适跑鞋</p>
          </div>
          <div className="pyramid-level middle">
            <h4>进阶层</h4>
            <p>循序渐进 + 充分热身</p>
          </div>
          <div className="pyramid-level top">
            <h4>精英层</h4>
            <p>力量训练 + 恢复策略</p>
          </div>
        </div>
      </div>
    </div>

    <div className="knowledge-box">
      <h3>⚠️ 警示信号</h3>
      <ul>
        <li><strong>疼痛：</strong>不是"努力"的代名词</li>
        <li><strong>肿胀：</strong>立即停止并冰敷</li>
        <li><strong>功能受限：</strong>关节活动范围减小</li>
        <li><strong>持续性不适：</strong>超过72小时需就医</li>
      </ul>
    </div>

    <div className="explanation">
      <h3>🏆 科学训练原则</h3>
      <div className="rule-box">
        <ul>
          <li><strong>10&amp;原则：</strong>每周跑量增加不超过10&amp;</li>
          <li><strong>交替训练：</strong>跑步+游泳+骑行</li>
          <li><strong>主动恢复：</strong>轻松跑&amp;gt;休息&amp;gt;不运动</li>
          <li><strong>倾听身体：</strong>疲劳和疼痛的区别</li>
        </ul>
      </div>
    </div>
  </div>
);

// 跑步课程数据
const runningCourses = [
  {
    id: 5,
    title: "跑步的基础知识",
    description: "认识跑步这项运动，了解跑步的基本原理",
    difficulty: "入门",
    color: "#FF5722",
    icon: "🏃",
    chapters: [
      { id: 11, title: "为什么我们会跑步？", content: "runningIntro" },
      { id: 12, title: "跑步的基本动作", content: "runningBasics" }
    ]
  },
  {
    id: 6,
    title: "跑步中的力量",
    description: "学习跑步中的力学原理，了解如何跑得更快更稳",
    difficulty: "基础",
    color: "#FF9800",
    icon: "💨",
    chapters: [
      { id: 13, title: "重力和支撑力", content: "gravitySupport" },
      { id: 14, title: "推动力和摩擦力", content: "propulsionFriction" }
    ]
  },
  {
    id: 7,
    title: "跑步技巧与力学",
    description: "掌握跑步的科学技巧，提高运动效率",
    difficulty: "进阶",
    color: "#FFC107",
    icon: "⚡",
    chapters: [
      { id: 15, title: "步频和步幅", content: "cadenceStride" },
      { id: 16, title: "身体姿态优化", content: "postureOptimization" }
    ]
  },
  {
    id: 8,
    title: "科学跑步训练",
    description: "运用力学原理进行科学训练，预防运动损伤",
    difficulty: "高阶",
    color: "#FF6F00",
    icon: "🏆",
    chapters: [
      { id: 17, title: "能量消耗与恢复", content: "energyRecovery" },
      { id: 18, title: "避免运动损伤", content: "injuryPrevention" }
    ]
  }
];

// 主应用组件
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSport, setSelectedSport] = useState(null); // 新增：运动选择状态

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCurrentPage('course');
  };

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    setCurrentPage('sportCourses');
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setCurrentPage('chapter');
  };

  const HomePage = () => (
    <div className="home-page">
      <header className="header">
        <h1>⚽ 运动力学小课堂</h1>
        <p>探索运动中的科学奥秘，让体育学习更有趣！</p>
      </header>
      
      <main className="sport-selection">
        <div className="sport-cards">
          <div 
            className="sport-card swimming-card"
            onClick={() => handleSportSelect('swimming')}
          >
            <div className="sport-icon">🏊‍♂️</div>
            <h2>游泳力学</h2>
            <p>探索水中运动的科学原理</p>
            <div className="sport-features">
              <span className="feature-tag">浮力原理</span>
              <span className="feature-tag">推进力学</span>
              <span className="feature-tag">阻力优化</span>
            </div>
          </div>
          
          <div 
            className="sport-card running-card"
            onClick={() => handleSportSelect('running')}
          >
            <div className="sport-icon">🏃‍♂️</div>
            <h2>跑步力学</h2>
            <p>掌握陆地运动的科学技巧</p>
            <div className="sport-features">
              <span className="feature-tag">重力作用</span>
              <span className="feature-tag">步态优化</span>
              <span className="feature-tag">能量效率</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const CoursePage = () => {
    if (!selectedCourse) return null;

    return (
      <div className="course-page">
        <header className="course-header" style={{ backgroundColor: selectedCourse.color }}>
          <button onClick={() => setCurrentPage(selectedSport ? 'sportCourses' : 'home')} className="back-button">
            ← 返回{selectedSport ? '运动' : '首页'}
          </button>
          <h1>{selectedCourse.icon} {selectedCourse.title}</h1>
          <p>{selectedCourse.description}</p>
        </header>
        
        <main className="chapters-list">
          <h2>课程章节</h2>
          {selectedCourse.chapters.map(chapter => (
            <div 
              key={chapter.id}
              className="chapter-card"
              onClick={() => {
                setSelectedChapter(chapter);
                setCurrentPage('chapter');
              }}
            >
              <h3>{chapter.title}</h3>
              <p>点击开始学习 →</p>
            </div>
          ))}
        </main>
      </div>
    );
  };

  const SportCoursesPage = () => {
    const currentCourses = selectedSport === 'swimming' ? courses : runningCourses;
    const sportTitle = selectedSport === 'swimming' ? '🏊‍♂️ 游泳力学' : '🏃‍♂️ 跑步力学';
    const sportColor = selectedSport === 'swimming' ? '#4A90E2' : '#FF5722';

    return (
      <div className="sport-courses-page">
        <header className="sport-courses-header" style={{ backgroundColor: sportColor }}>
          <button onClick={() => setCurrentPage('home')} className="back-button">
            ← 返回首页
          </button>
          <h1>{sportTitle}</h1>
          <p>选择课程开始学习</p>
        </header>
        
        <main className="course-grid">
          {currentCourses.map(course => (
            <div 
              key={course.id}
              className="course-card"
              onClick={() => handleCourseSelect(course)}
              style={{ borderColor: course.color }}
            >
              <div className="course-icon" style={{ backgroundColor: course.color }}>
                {course.icon}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="difficulty-badge" style={{ backgroundColor: course.color }}>
                {course.difficulty}
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  };

  const ChapterPage = () => {
    if (!selectedChapter) return null;

    return (
      <div className="chapter-page">
        <header className={selectedSport ? 'sport-courses-header' : 'course-header'} style={{ backgroundColor: selectedCourse.color }}>
          <button onClick={() => setCurrentPage('course')} className="back-button">
            ← 返回课程
          </button>
          <h1>{selectedChapter.title}</h1>
        </header>
        
        <main className="chapter-main">
          <ChapterContent content={selectedChapter.content} />
        </main>
      </div>
    );
  };

  return (
    <div className="app">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'sportCourses' && <SportCoursesPage />}
      {currentPage === 'course' && <CoursePage />}
      {currentPage === 'chapter' && <ChapterPage />}
    </div>
  );
};

// 导出应用组件
export default App;
