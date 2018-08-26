import {
  Component,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;
  @Input()
  highlightColorFragment: string;

  constructor() {}

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => (tab.active = false));
    tab.active = true;
  }

  getStyles(tab: TabComponent) {
    if (tab.active) {
      return {
        background: `rgb(${this.highlightColorFragment})`,
        'box-shadow': `1px 1px 10px 1px rgba(${
          this.highlightColorFragment
        }, 0.34)`
      };
    }
    return {
      color: `rgb(${this.highlightColorFragment})`
    };
  }
}
