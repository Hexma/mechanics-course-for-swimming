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

// 主应用组件
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCurrentPage('course');
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setCurrentPage('chapter');
  };

  const HomePage = () => (
    <div className="home-page">
      <header className="header">
        <h1>🏊‍♂️ 游泳力学小课堂</h1>
        <p>让我们一起探索游泳中的科学奥秘！</p>
      </header>
      
      <main className="course-grid">
        {courses.map(course => (
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

  const CoursePage = () => {
    if (!selectedCourse) return null;

    return (
      <div className="course-page">
        <header className="course-header" style={{ backgroundColor: selectedCourse.color }}>
          <button onClick={() => setCurrentPage('home')} className="back-button">
            ← 返回首页
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
              onClick={() => handleChapterSelect(chapter)}
            >
              <h3>{chapter.title}</h3>
              <p>点击开始学习 →</p>
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
        <header className="chapter-header">
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
      {currentPage === 'course' && <CoursePage />}
      {currentPage === 'chapter' && <ChapterPage />}
    </div>
  );
};

// 导出应用组件
export default App;
